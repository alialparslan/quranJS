"use strict"
const mushaf = require(".").mushaf;
const {Num} = require('./types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")
mushaf.setPolicy("includeBasmalas", false)

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
mushafs.forEach( mushaf => {
    console.log("\n--------------------------------------------------------------------\n")
    console.log(mushaf.name,':')

    
    mushaf.forEach( surah => {
        let abjad = surah.abjad()
        let wordCount = surah.wordCount()
        let letterCount = surah.letterCount()
        console.log(surah.no, "abjad:", abjad.primes().join(' x '),
                    '; word count:', wordCount.primes().join(' x '),
                    '; letter count:', letterCount.primes().join(' x '))
    })

    let abjad = mushaf.abjad()
    let wordCount = mushaf.wordCount()
    let letterCount = mushaf.letterCount()
    console.log("Total:", abjad.valueOf(), abjad.primes().join(' x '), 
                '; word count:', wordCount.valueOf(), wordCount.primes().join(' x '),
                '; letter count:', letterCount.valueOf(), letterCount.primes().join(' x '))
})

