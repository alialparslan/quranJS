"use strict"
const mushaf = require(".").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let tanzilSimple = mushafs.select('tanzil-simple')

let basmala = tanzilSimple.select("1:1")
//console.log(mushafs.select(['tanzil-simple','tanzil-simplea']))

let range = tanzilSimple.select('1-114')
range.zerothPolicy(false)
console.log(basmala.abjad())

let count = 0
range.forEach( (verse, surahNo, verseNo) => {
    if(surahNo == 1) console.log(surahNo, verseNo)
    count += parseInt(surahNo + '' + verseNo)
})
console.log(count)
//console.log(tanzilSimple.getSurah(9))