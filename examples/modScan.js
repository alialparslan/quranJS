"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let format = "raw\nfactors";

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
mushafs.forEach(mushaf => {
    console.log(mushaf.name)
    mushaf.select("1-114").forEach(verse =>{
        let abjad = verse.abjad()
        if(abjad % (19) == 0){
            console.log(verse.surah.no+':'+verse.no, abjad.toString("raw, factors"))
        }
    })


})
