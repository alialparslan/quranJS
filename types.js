const t = require("theorem.js");

const cache = {}

function factorsToString(factors){
    let str = '';
    let lastFactor = false
    let power = 1
    factors.forEach(factor => {
        factor = factor.valueOf()
        if (factor == lastFactor){
            power += 1
        }else{
            if(power > 1){
                if(power == 2){
                    str += 'x' + lastFactor
                }else if(power == 3){
                    str += 'x' + lastFactor + 'x' + lastFactor
                }else{
                    str += '^' + power
                }
                power = 1
            }
            str += str != '' ? ' x ' + factor : factor
            lastFactor = factor
        }
    })
    if(power > 1){
        if(power == 2){
            str += 'x' + lastFactor
        }else if(power == 3){
            str += 'x' + lastFactor + 'x' + lastFactor
        }else{
            str += '^' + power
        }
    }
    return str
}

class Factors extends Array{
    constructor(value){
        super()
        if(value && Array.isArray(value)) value.forEach( e => this.push(e.valueOf()))
    }
    toString(){
        return factorsToString(this)
    }
}

class Num extends Number{
    constructor(value){
        super(value)
    }
    primes(){
        if(!cache[this])cache[this] = new Factors(t.primeFactors(this))
        return cache[this]
        
    }

}

module.exports = {Num}