const t = require("theorem.js");

const cache = {}


class Num extends Number{
    constructor(value){
        super(value)
    }
    primes(){
        if(!cache[this])cache[this] = t.primeFactors(this)
        return cache[this]
        
    }

}

module.exports = {Num}