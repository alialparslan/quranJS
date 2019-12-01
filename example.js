"use strict"
const mushaf = require(".").mushaf;
const {Num} = require('./types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")
mushaf.setPolicy("includeBasmalas", true)
let tanzilSimple = mushafs.select('tanzil-simple')

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

console.log(tanzilSimple.select(2).abjad().primes())
//console.log(tanzilSimple.getSurah(9))

