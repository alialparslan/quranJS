"use strict"
const mushaf = require(".").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let tanzilSimple = mushafs.select('tanzil-simple')

let basmala = tanzilSimple.select("1:1")
//console.log(mushafs.select(['tanzil-simple','tanzil-simplea']))

let range = tanzilSimple.select('1:0-2:0')
range.countZeros(false)
console.log(basmala.abjad())