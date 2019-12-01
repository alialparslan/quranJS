"use strict"
const mushaf = require(".").mushaf;
const {Num} = require('./types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")
mushaf.setPolicy("includeBasmalas", true)

let tanzilSimple = mushafs.select('tanzil-uthmani-min')

let basmala = tanzilSimple.select("1:1")
//console.log(mushafs.select(['tanzil-simple','tanzil-simplea']))

let range = tanzilSimple.select('1-114')
//range.zerothPolicy(true)
console.log(basmala.abjad())

let count = 0
range.forEach( (verse, surahNo, verseNo) => {
    if(surahNo == 1) console.log(surahNo, verseNo)
    count += verseNo + surahNo
})

console.log(tanzilSimple.abjad().primes(), tanzilSimple.select(96).abjad().primes())
//console.log(tanzilSimple.getSurah(9))

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min', 'Diyanet-3'])
mushafs.forEach( mushaf => {
    console.log("\n--------------------------------------------------------------------\n")
    console.log(mushaf.name,':')

    mushaf.forEach( surah => {
        let abjad = surah.abjad()
        let wordCount = surah.wordCount()
        console.log(surah.no, "abjad:", abjad.primes().join(' x '), '; word count:', wordCount.primes().join(' x '))
    })

    let abjad = mushaf.abjad()
    let wordCount = mushaf.wordCount()
    console.log("Total:", abjad.valueOf(), abjad.primes().join(' x '), '; word count:', wordCount.valueOf(), wordCount.primes().join(' x '))
})