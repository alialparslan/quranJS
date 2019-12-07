"use strict"
var Table = require('cli-table');
const mushaf = require("..").mushaf;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

mushaf.setPolicy('includeBasmalas', false)

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
mushafs.forEach(mushaf => {
    let container = mushaf.select("1-19")
    let letterFrequencies = container.letterFrequencies().get()
    console.log(container.count)
    console.log(mushaf.name+':')
    Object.keys(letterFrequencies).forEach( letter => {
        let num = letterFrequencies[letter]
        console.log(letter + ':', num.valueOf(), num.primes().toString() )
    })
    console.log('\n')
})
