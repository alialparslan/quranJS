"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;
const {Frequencies} = require('../types');
const {Num} = require('../types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")

mushaf.setPolicy('includeBasmalas', true)

const selectedPrimes = [11,13,17,19,23,29,37]

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])


mushafs.forEach(mushaf => {
    let allVerses = mushaf.select("1-114")
    let verseCount = allVerses.count()
    console.log(mushaf.name+':')
    console.log("Verse count:", verseCount)
    let attributes = ['abjad', 'letterCount', 'wordCount']
    attributes.forEach( attribute => {
        console.log("",attribute+':')
        let freqs = new Frequencies();
        let odd = 0
        let even = 0
        allVerses.forEach( verse => {
            let onlyOnce = []
            let value = verse[attribute]()
            value.primes().forEach( prime => {
                if(onlyOnce.indexOf(prime) == -1){
                    onlyOnce.push(prime)
                    freqs.increase(prime)
                }
            })

            if(value % 2 == 1)
                odd++;
            else 
                even++;
        })
        
        selectedPrimes.forEach(prime => {
            let freq = freqs.get(prime)
            if(!freq) freq = new Num(0)
            console.log("  ",prime,": ",freq.toString("raw, Factors: factors"), "      relative freq:", freq/verseCount*prime)
        })
        console.log((new Num(odd)).toString("   Odd: raw, factors"), "; ", (new Num(even)).toString("Even: raw, factors"),"\n")
    })
    console.log('\n')
})