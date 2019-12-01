"use strict"
const fs = require("fs");
const path = require("path");
const utils = require("./utils");
const {Num} = require("./types")

const policies = {
    // Whether basmalas without ayat number will be omitted or counted in calculations
    includeBasmalas : false,
}

module.exports.setStandardPolicy = function(policyName, value){
    if(policies[policyName] && typeof value == typeof policies[policyName]){
        policies[policyName] = value
    }
}

class verseRange{
    constructor(mushaf, startSurah, startVerse, endSurah, endVerse){
        this.mushaf = mushaf
        this.startSurah = startSurah
        this.endSurah = endSurah
        this.startVerse = startVerse
        this.endVerse = endVerse
        
        this.includeZero = policies.includeBasmalas
        this.updateCount()
    }

    setBasmalaPolicy(countOrNot){
        let oldPolicy = this.includeZero
        this.includeZero = countOrNot
        if(oldPolicy != countOrNot) this.updateCount();
    }

    updateCount(){
        this.count = this.mushaf.surahs[this.startSurah-1].count-this.startVerse+1
        if(!this.includeZero && this.startVerse == 0) this.count--;
        for(let i = this.startSurah+1; i < this.endSurah; i++){
            this.count += this.mushaf.surahs[i-1].count
            if(this.includeZero && (i != 1 && i != 9)) this.count++;
        }
        if(this.endSurah > this.startSurah){
            if(this.includeZero && this.endSurah != 1 && this.endSurah != 9) this.count++;
            this.count += this.endVerse;
        }
    }

    // Will be called with arguments: Verse, surahNo, verseNo
    forEach(func){
        let surah = this.mushaf.getSurah(this.startSurah)
        let startVerse = this.startVerse
        if(startVerse == 0 && !this.includeZero) startVerse++;
        for(let i = startVerse; i <= surah.count ; i++){
            func(surah.getVerse(i), surah.no, i)
        }
        for(let i = this.startSurah+1; i < this.endSurah; i++){
            surah = this.mushaf.getSurah(i)
            if(this.includeZero && surah.getVerse(0)) func(surah.getVerse, i, 0)
            for(let v =1; v <= surah.count; v++){
                func(surah.getVerse(v), i, v)
            }
        }
        if(this.endSurah > this.startSurah){
            let surah = this.mushaf.getSurah(this.endSurah)
            let v = 1;
            if(this.includeZero && surah.getVerse(0)) v = 0;
            for(; v <= this.endVerse; v++){
                func(surah.getVerse(v), this.endSurah, v)
            }
        }
    }

    abjad(){

    }
}

class Verse{
    constructor(no, verse){
        this.no = no
        this.verse = verse
    }
    abjad(){
        return new Num(utils.calcAbjad(this.verse))
    }
}

class Surah{
    constructor(no, verses){
        this.no = no
        this.verses = verses
        this.count = verses.length-1 // -1 for numberless verse
    }
    getVerse(no){
        if(no > this.count) throw new Error("Out of verse range!");
        if(typeof this.verses[no] == 'string') this.verses[no] = new Verse(no, this.verses[no]);
        return this.verses[no]
    }
    // There is no validity check for params
    abjad(firstVerse = 0, lastVerse){
        if(lastVerse == undefined) lastVerse = this.count;
        let total = 0
        for(let i = firstVerse; i <= lastVerse; i++){
            total += this.verses[i].abjad()
        }
        return new Num(total)
    }
}

class Mushaf{
    constructor(name, verses){
        this.name = name
        this.surahs = []
        verses.forEach( (verseArr,i) => {
            this.surahs.push(new Surah(i+1, verseArr));
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

class Mushafs{
    constructor(){
        this.mushafs = []
    }
    add(mushaf){
        if(mushaf instanceof Mushaf){
            if(this.select(mushaf.name) == false)
                this.mushafs.push(mushaf);
            else{
                console.log(this.select(mushaf.name))
                throw new Error("A mushaf with same name exists!");
            }
        }else
            throw new Error("Paramater mushaf should be instance of Mushaf")
    }
    select(selector){
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
                    let mushaf = this.select(s);
                    if(mushaf){
                        if(mushafs){
                            if(mushafs.select(mushaf.name) == false) mushafs.add(mushaf);
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
    let data = fs.readFileSync(filePath, "utf8");
    let lines = data.split('\n')
    let verses = []
    for(let i=0; i<114; i++) verses.push([]);
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
                }else{
                    let split = verse.split(/(?<=^(?:[^ ]+ ){3}[^ ]+) /u)
                    if(split.length != 2) throw new Error("Couldn't split basmala!");
                    verses[surahNo-1].push(split[0])
                    verses[surahNo-1].push(split[1])
                }
            }else{
                verses[surahNo-1].push(verse)
            }   
        }
    })
    return new Mushaf(path.basename(filePath).replace(/\.[^.]+$/,'').replace(/^quran/,'tanzil'), verses);
}

tanzil.loadDir = function(dir){
    let mushafs = new Mushafs()
    fs.readdirSync(dir).forEach( file => {
        mushafs.add(this.loadFile(path.join(dir, file)))
    })
    return mushafs
}
