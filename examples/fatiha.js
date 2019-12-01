
const mushaf = require("..").mushaf;
const Num = require("../types").Num;

let mushafs = mushaf.tanzil.loadDir("data/mushafs")

let tanzilSimple = mushafs.select('tanzil-uthmani')

let fatiha = tanzilSimple.select(1)

total = {
    no : 0,
    word: 0,
    letter: 0,
    abjad: 0,
}
fatiha.forEach( verse => {
    total.no += verse.no
    total.word += verse.wordCount()
    total.letter += verse.letterCount()
    total.abjad += verse.abjad()
    console.log(verse.no, verse.wordCount().valueOf(), verse.letterCount().valueOf(), verse.abjad().valueOf(), verse.abjad().primes())
})
console.log(total.no, total.word, total.letter, total.abjad, (new Num(total.abjad)).primes())