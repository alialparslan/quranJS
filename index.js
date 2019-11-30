"use strict"
const mushaf = require("./mushaf");

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let tanzilSimple = mushafs.select('tanzil-simple')
console.log(tanzilSimple.select('23:23-'))
//console.log(mushafs.select(['tanzil-simple','tanzil-simplea']))