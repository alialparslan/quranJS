"use strict"
const mushaf = require(".").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let tanzilSimple = mushafs.select('tanzil-simple')

console.log(tanzilSimple.select(113))
//console.log(mushafs.select(['tanzil-simple','tanzil-simplea']))

let range = tanzilSimple.select('1:0-114')
range.countZeros(true)
console.log(range)