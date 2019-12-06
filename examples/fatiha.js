"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;
const Num = require("../types").Num;
const factorsToString = require('../utils').factorsToString

let mushafs = mushaf.tanzil.loadDir("data/mushafs")


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
                    abjad.valueOf()+'\n'+abjad.primes().toString(),
                    wordCount.valueOf()+'\n'+wordCount.primes().toString(),
                    letterCount.valueOf()+'\n'+letterCount.primes().toString(),
                    verse.letters().join(',')
                ])
    })
    let abjad = fatiha.abjad()
    let wordCount = fatiha.wordCount()
    let letterCount = fatiha.letterCount()
    table.push([
                "Total",
                abjad.valueOf()+'\n'+abjad.primes().toString(),
                wordCount.valueOf()+'\n'+wordCount.primes().toString(),
                letterCount.valueOf()+'\n'+letterCount.primes().toString()
            ])
    console.log(table.toString())

})
