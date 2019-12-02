"use strict"
const fs = require("fs");
const path = require("path");
const utils = require("./utils");
const {Num} = require("./types")

const policies = {
    // Whether basmalas without ayat number will be omitted or counted in calculations
    includeBasmalas : true,
}

// Does not effects objects created before change
module.exports.setPolicy = (policyName, value) => {
    if(policies[policyName] != undefined && typeof value == typeof policies[policyName]){
        policies[policyName] = value
    }else{
        throw new Error("Policy doesn't exists or wrong type for value!")
    }
}

class policyManager{
    constructor(){
        this.setPolicies = {}
    }
    setPolicy(name, value){
        if(policies[name]) this.setPolicies[name] = value
        else throw new Error("No such policy!")
    }
    getPolicy(name){
        if(this.setPolicies[name] != undefined) return this.setPolicies[name];
        if(this.parent) return this.parent.getPolicy(name);
        if(policies[name] != undefined) return policies[name];
        throw new Error("No such policy!")
    }
    getAllPolicies(){
        let objsPolicies
        if(this.parent){
            objsPolicies = this.parent.getAllPolicies()
        }else{
            objsPolicies = { ...policies}
        }
        // First get a copy of parents policies then override the ones that exists also in itself
        Object.keys(this.setPolicies).forEach( name => {
            objsPolicies[name] = this.setPolicies[name]
        })
        return objsPolicies
    }
}


// For search matches
class Match{
    constructor(verse, count){
        this.verse = verse
        this.count = count
    }
}

class verseRange extends policyManager{
    constructor(mushaf, startSurah, startVerse, endSurah, endVerse){
        super()
        this.mushaf = mushaf
        this.startSurah = startSurah
        this.endSurah = endSurah
        this.startVerse = startVerse
        this.endVerse = endVerse
        this.updateCount()
    }

    updateCount(){
        let includeBasmalas = this.getPolicy("includeBasmalas")
        this.count = this.mushaf.surahs[this.startSurah-1].count-this.startVerse+1
        if(!includeBasmalas && this.startVerse == 0) this.count--;
        for(let i = this.startSurah+1; i < this.endSurah; i++){
            this.count += this.mushaf.surahs[i-1].count
            if(includeBasmalas && (i != 1 && i != 9)) this.count++;
        }
        if(this.endSurah > this.startSurah){
            if(includeBasmalas && this.endSurah != 1 && this.endSurah != 9) this.count++;
            this.count += this.endVerse;
        }
    }

    // Will be called with arguments: Verse, surahNo, verseNo
    forEach(func){
        let includeBasmalas = this.getPolicy("includeBasmalas")
        let surah = this.mushaf.getSurah(this.startSurah)
        let startVerse = this.startVerse
        if(startVerse == 0 && !includeBasmalas) startVerse++;
        for(let i = startVerse; i <= surah.count ; i++){
            func(surah.getVerse(i), surah.no, i)
        }
        for(let i = this.startSurah+1; i < this.endSurah; i++){
            surah = this.mushaf.getSurah(i)
            if(includeBasmalas && surah.getVerse(0)) func(surah.getVerse, i, 0)
            for(let v =1; v <= surah.count; v++){
                func(surah.getVerse(v), i, v)
            }
        }
        if(this.endSurah > this.startSurah){
            let surah = this.mushaf.getSurah(this.endSurah)
            let v = 1;
            if(includeBasmalas && surah.getVerse(0)) v = 0;
            for(; v <= this.endVerse; v++){
                func(surah.getVerse(v), this.endSurah, v)
            }
        }
    }

    abjad(){
        let total = 0
        this.forEach( verse => total += verse.abjad())
        return new Num(total)
    }
}

class Verse{
    constructor(surah, no, verse){
        this.surah = surah
        this.no = no
        this.verse = verse
    }
    abjad(){
        return new Num(utils.calcAbjad(this.verse))
    }
    letterCount(){
        return new Num(utils.countLetters(this.verse))
    }
    wordCount(){
        return new Num(utils.countWords(this.verse))
    }
    search(text){
        return this.verse.search(text)
    }
}

class Surah extends policyManager{
    constructor(mushaf, no, verses){
        super()
        this.mushaf = mushaf
        this.parent = this.mushaf
        this.no = no
        this.verses = verses
        for(let i = 0; i < this.verses.length; i++){
            if(typeof this.verses[i] == 'string'){
                this.verses[i] = new Verse(this, i, this.verses[i]);
            }
        }
        this.count = verses.length-1 // -1 for numberless verse
    }
    getVerse(no){
        if(no > this.count) throw new Error("Out of verse range!");
        return this.verses[no]
    }
    // func will called with arguments: Verse, surahNo, verseNo
    forEach(func, firstVerse = 0, lastVerse){
        if(lastVerse == undefined) lastVerse = this.count;
        if(firstVerse < 0) throw new Error("first verse number has to be greater than zero!")
        let includeBasmalas = this.getPolicy("includeBasmalas")
        if(firstVerse == 0 && ( !includeBasmalas || this.no == 1 || this.no == 9)) firstVerse = 1;
        for(let i = firstVerse; i <= lastVerse; i++){
            func(this.verses[i], this.no, i)
        }
    }
    // There is no validity check for params
    abjad(firstVerse = 0, lastVerse){
        let total = 0
        this.forEach(verse => total += verse.abjad(), firstVerse, lastVerse)
        return new Num(total)
    }
    letterCount(){
        let val = 0
        this.forEach(verse => val += verse.letterCount())
        return new Num(val)
    }
    wordCount(){
        let val = 0
        this.forEach(verse => val += verse.wordCount())
        return new Num(val)
    }
    search(text, arr = []){
        this.forEach( verse => {
            if(verse.search(text) != -1) arr.push(verse)
        })
        return arr
    }
}

class Mushaf extends policyManager{
    constructor(name, verses){
        super()
        this.name = name
        this.surahs = []
        verses.forEach( (verseArr,i) => {
            this.surahs.push(new Surah(this, i+1, verseArr));
        })
    }
    
    getSurah(no){
        if(no < 1 || no > 114) throw new Error("Surah not found!");
        return this.surahs[no-1]
    }
    
    forEach(func){
        this.surahs.forEach( (surah, i) => {
            func(surah)
        })
    }
    abjad(){
        let val = 0
        this.forEach( surah => val += surah.abjad())
        return new Num(val)
    }
    letterCount(){
        let val = 0
        this.forEach(surah => val += surah.letterCount())
        return new Num(val)
    }
    wordCount(){
        let val = 0
        this.forEach(surah => val += surah.wordCount())
        return new Num(val)
    }
    search(text, arr = []){
        this.forEach( surah => surah.search(text, arr))
        return arr
    }

    select(selector){
        if(typeof selector == 'string' && /^\d+$/.test(selector)) selector = parseInt(selector);
        if(typeof selector == 'number'){
            if(selector <= 0 || selector > 114) throw new Error("Out of the verse range!")
            return this.surahs[selector-1];
        }
        if(typeof selector != 'string') throw new Error("Unexpected selector type! It has to be number or string!")
        let match = selector.match(/^(?<startSurah>\d+)(?::(?<startVerse>\d+))?(?:(?<hypen>-)(?:(?<endSurah>\d+)(?::(?<endVerse>\d+))?)?)?$/)
        if(!match) throw new Error("Ill-formated selector! It should be like 23:25-46:10 or 23-46:10 or 23-46 ...")
        let groups = match.groups
        let startSurah = groups.startSurah != undefined ? parseInt(groups.startSurah) : false
        let startVerse = groups.startVerse != undefined ? parseInt(groups.startVerse) : false
        let endSurah = groups.endSurah != undefined ? parseInt(groups.endSurah) : false
        let endVerse = groups.endVerse != undefined ? parseInt(groups.endVerse) : false
        let hypen = groups.hypen ? true : false
        // hypen without endSurah means go until the end
        if(hypen && !endSurah) endSurah == 114;
        // Check for surah boundaries
        if(startSurah < 1 || startSurah > 114 || (endSurah && (endSurah < 1 || endSurah > 114))) 
            throw new Error("Out of range of surahs!");
        if(startVerse === false) startVerse = 0;
        if( (startSurah == 1 || startSurah == 9) && startVerse === 0) startVerse = 1;
        if(endSurah){
            if( (endSurah == 1 || endSurah == 9) && endVerse === 0){
                endSurah--;
                endVerse = false;
            }
            if(endSurah < startSurah) throw new Error("Starting Surah no cannot be greater than ending!");
            
            if(endVerse === false) endVerse = this.surahs[endSurah-1].count;
            
            if(startSurah == endSurah){
                if(startVerse > endVerse) throw new Error("Ending verse number has to be greater than starting verse in case where ending and starting surahs are same!")
                if(startVerse == endVerse){
                    endSurah = false
                    endVerse = false
                }
            }
            
        }
        if(startVerse && startVerse > this.surahs[startSurah-1].count) throw new Error("Out of verse range");
        if(endVerse && endVerse > this.surahs[endSurah-1].count) throw new Error("Out of verse range");
        console.log(startSurah,endSurah,startVerse,endVerse)
        if(!endSurah) return this.surahs[startSurah-1].getVerse(startVerse)
        return new verseRange(this, startSurah, startVerse, endSurah, endVerse)
    }
}

class Mushafs extends policyManager{
    constructor(){
        super()
        this.mushafs = []
    }
    add(mushaf){
        if(mushaf instanceof Mushaf){
            if(this.pick(mushaf.name) == false){
                mushaf.parent = this
                this.mushafs.push(mushaf);
            }else{
                throw new Error("A mushaf with same name exists!");
            }
        }else
            throw new Error("Paramater mushaf should be instance of Mushaf")
    }

    forEach(func){
        this.mushafs.forEach(func)
    }
    
    pick(selector){
        if(typeof selector == 'number'){
            if(selector < 0 || selector > this.mushafs.length) return false;
            return this.mushafs[selector];
        }else if(typeof selector == 'string'){
            let mushaf = this.mushafs.find(mushaf => mushaf.name == selector)
            return mushaf ? mushaf : false;
        }else if(Array.isArray(selector)){
            let mushafs = false
            selector.forEach( s => {
                if(typeof s == "string" || typeof s == "number"){
                    let mushaf = this.pick(s);
                    if(mushaf){
                        if(mushafs){
                            if(mushafs.pick(mushaf.name) == false) mushafs.add(mushaf);
                        }else{
                            mushafs = new Mushafs();
                            mushafs.add(mushaf);
                        }
                    }
                }
            })
            return mushafs;
        }else throw new Error("Unexpected Type of selector!");
    }
}

const tanzil = {}
module.exports.tanzil = tanzil

tanzil.loadFile = function(filePath){
    let name = path.basename(filePath).replace(/\.[^.]+$/,'').replace(/^quran/,'tanzil')
    let diyanet = name.startsWith('diyanet')
    let data = fs.readFileSync(filePath, "utf8");
    let lines = data.split('\n')
    let verses = []
    for(let i=0; i<114; i++) verses.push([]);
    let basmala
    lines.forEach( line => {
        let splitVerse = line.split("|")
        if(splitVerse.length == 3){
            let surahNo = splitVerse[0]
            let verseNo = splitVerse[1]
            let verse = splitVerse[2].replace(/\s+$/,'')
            //console.log({verse})
            if(verseNo == 1){
                if(surahNo == 1 || surahNo == 9){
                    verses[surahNo-1].push(false)
                    verses[surahNo-1].push(verse)
                    if(surahNo == 1) basmala = verse
                }else{
                    if(diyanet){
                        verses[surahNo-1].push(basmala)
                        verses[surahNo-1].push(verse)
                    }else{
                        let split = verse.split(/(?<=^(?:[^ ]+ ){3}[^ ]+) /u)
                        if(split.length != 2) throw new Error("Couldn't split basmala!");
                        verses[surahNo-1].push(split[0])
                        verses[surahNo-1].push(split[1])
                    }
                }
            }else{
                verses[surahNo-1].push(verse)
            }   
        }
    })
    return new Mushaf(name, verses);
}

tanzil.loadDir = function(dir){
    let mushafs = new Mushafs()
    fs.readdirSync(dir).forEach( file => {
        mushafs.add(this.loadFile(path.join(dir, file)))
    })
    return mushafs
}
