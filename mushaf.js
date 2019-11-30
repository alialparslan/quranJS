"use strict"
const fs = require("fs");
const path = require("path");
const utils = require("./utils");

class verseRange{
    constructor(mushaf, startSurah, startVerse, endSurah, endVerse){
        this.mushaf = mushaf
        this.startSurah = startSurah
        this.endSurah = endSurah
        this.startVerse = startVerse
        this.endVerse = endVerse
    }
}

class Surah{
    constructor(no, verses){
        this.no = no
        this.verses = verses
        this.count = verses.length-1 // -1 for numberless verse
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
        let startSurah = groups.startSurah ? groups.startSurah : false
        let startVerse = groups.startVerse ? groups.startVerse : false
        let endSurah = groups.endSurah ? groups.endSurah : false
        let endVerse = groups.endVerse ? groups.endVerse : false
        if(hypen && !endSurah) endSurah == 114;
        if(startSurah < 1 || startSurah > 114 || (endSurah && (endSurah < 1 || endSurah > 114))) 
            return new Error("Out of ranges of surahs!");
        if(startVerse){
            
        }
        if(!endSurah) return 
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
            if(verseNo == 1 && (surahNo == 1 || surahNo == 9)){
                verses[surahNo-1].push(false)
            }
            verses[surahNo-1].push(verse)
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
