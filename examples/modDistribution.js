"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;
const {Frequencies} = require('../types');
const {Num} = require('../types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")

mushaf.setPolicy('includeBasmalas', true)


mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])

let modOf = 19

mushafs.forEach(mushaf => {
    let freqs = new Frequencies();
    let allVerses = mushaf.select("1-114")

    allVerses.forEach( verse => {
        freqs.increase(verse.abjad()%modOf)
    })
    console.log(mushaf.name+':')
    console.log("Verse count:", allVerses.count)
    for(let i= 0; i < modOf; i++){
        let freq = freqs.get(i)
        if(!freq) freq = new Num(0)
        console.log(i, freq.toString("raw, factors"))
    }
    console.log('\n')
})
