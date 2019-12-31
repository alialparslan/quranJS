"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;
const {Frequencies} = require('../types');
const {Num} = require('../types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")

mushaf.setPolicy('includeBasmalas', false)


mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])


mushafs.forEach(mushaf => {
    let freqs = new Frequencies();
    let allVerses = mushaf.select("1-114")
    let verseCount = 0
    let odd = 0
    let even = 0
    allVerses.forEach( verse => {
        let onlyOnce = []
        let abjad = verse.abjad()
        abjad.primes().forEach( prime => {
            if(onlyOnce.indexOf(prime) == -1){
                onlyOnce.push(prime)
                freqs.increase(prime)
            }
            
        })
        if(abjad % 2 == 1) odd++
        else even++
        verseCount++
    })
    console.log(mushaf.name+':')
    console.log("Verse count:", verseCount)
    Array.from([2,3,5,7,11,13,17,19,23,29,31,37,41,79]).forEach(prime => {
        let freq = freqs.get(prime)
        console.log(prime,": ",freq.toString("raw, Factors: factors"), "      relative freq:", freq/verseCount*prime)
    })
    console.log((new Num(odd)).toString("Odd: raw, factors"), "; ", (new Num(even)).toString("Even: raw, factors"))
    console.log('\n')
})
