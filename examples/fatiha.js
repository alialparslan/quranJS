"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let format = "raw\nfactors";

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
mushafs.forEach(mushaf => {
    let fatiha = mushaf.getSurah(1)
    console.log(mushaf.name+': ')
    let table = new Table({head:['No','Abjad', 'Word Count', 'Letter Count', 'Letters']})
    fatiha.forEach( verse => {
        let abjad = verse.abjad()
        let wordCount = verse.wordCount()
        let letterCount = verse.letterCount()
        table.push([verse.no,
                    abjad.toString(format),
                    wordCount.toString(format),
                    letterCount.toString(format),
                    verse.letters().join(',')
                ])
    })
    let abjad = fatiha.abjad()
    let wordCount = fatiha.wordCount()
    let letterCount = fatiha.letterCount()
    table.push([
                "Total",
                abjad.toString(format),
                wordCount.toString(format),
                letterCount.toString(format)
            ])
    console.log(table.toString())

})
