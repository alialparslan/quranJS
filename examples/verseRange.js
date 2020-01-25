"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;
const Num = require("../types").Num;
const factorsToString = require('../utils').factorsToString

let utilsWithoutHamza = require('../utils')({'ء' : false})

let mushafs = mushaf.tanzil.loadDir("data/mushafs")


//mushaf.setPolicy("utils", utilsWithoutHamza)
//mushaf.setPolicy("includeBasmalas", false)

let format = "raw\nfactors"

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
mushafs.forEach(mushaf => {
    let verses = mushaf.select("9")

    console.log(mushaf.name+': ')
    let table = new Table({head:['No','Abjad', 'Word Count', 'Letter Count']})
    verses.forEach( verse => {
        let abjad = verse.abjad()
        let wordCount = verse.wordCount()
        let letterCount = verse.letterCount()
        table.push([verse.no,
                    abjad.toString(format),
                    wordCount.toString(format),
                    letterCount.toString(format)
                ])
    })
    let abjad = verses.abjad()
    let wordCount = verses.wordCount()
    let letterCount = verses.letterCount()
    table.push([
                "Total",
                abjad.toString(format),
                wordCount.toString(format),
                letterCount.toString(format)
            ])
    console.log(table.toString())

})
