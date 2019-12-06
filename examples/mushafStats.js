"use strict"
const mushaf = require("..").mushaf;
const {Num} = require('../types')
let mushafs = mushaf.tanzil.loadDir("data/mushafs")

mushaf.setPolicy("includeBasmalas", false)

let startedAt = Date.now()

let utilsWithoutHamza = require('../utils')({'ء' : false})
let policySets = {
    "Basmalas included":{
        "includeBasmalas": true,
    },
    "Baslamas excluded":{
        "includeBasmalas": false,
    },
    "Hamzas ignored, Basmalas included":{
        "includeBasmalas": true,
        utils: utilsWithoutHamza
    },
    "Hamzas ignored, Basmalas excluded":{
        "includeBasmalas": false,
        utils: utilsWithoutHamza
    }
}

mushafs = mushafs.pick(['tanzil-simple-clean', 'tanzil-uthmani', 'tanzil-uthmani-min','diyanet-2', 'diyanet-3','diyanet-7'])
Object.keys(policySets).forEach( setName => {
    let set = policySets[setName]
    console.log(setName + ':')
    Object.keys(set).forEach(key => {
        mushaf.setPolicy(key, set[key])
    })
    mushafs.forEach( (mushaf,i) => {
        let abjad = mushaf.abjad()
        let wordCount = mushaf.wordCount()
        let letterCount = mushaf.letterCount()
        console.log(mushaf.name + ':', " total:", abjad.valueOf(), abjad.primes().join(' x '), 
                    '; word count:', wordCount.valueOf(), wordCount.primes().join(' x '),
                    '; letter count:', letterCount.valueOf(), letterCount.primes().join(' x '))
    })
    console.log('----------------------------------------------------------------------')
})


console.log('It took '+(Date.now()-startedAt)+'ms to execute.')