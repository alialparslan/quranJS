const t = require("theorem.js");
const printers = require("./printers");

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
        if(this < 2) return [2]
        if(!cache[this])cache[this] = new Factors(t.primeFactors(this))
        return cache[this]
        
    }
    toString(specifiers){
        if(specifiers && typeof specifiers == "string"){
            return printers.print(this, specifiers);
        }else{
            return this.valueOf().toString();
        }
    }

}

class Frequencies{
    constructor(initWith){
        this.data = {}
        initWith && this.update(initWith)
    }
    update(data){
        Object.keys(data).forEach( letter => {
            if(this.data[letter]){
                this.data[letter] += data[letter]
            }else{
                this.data[letter] = data[letter]
            }
        })
    }
    increase(key){
        if(this.data[key] !== undefined){
            this.data[key] = new Num(this.data[key] + 1)
        }else{
            this.data[key] = new Num(1)
        }
    }
    get(key){
        //Object.keys(this.data).forEach( letter => {this.data[letter] = new Num(this.data[letter])})
        if(key !== undefined)
            return this.data[key]
        else
            return this.data
    }
}
module.exports = {Num, Frequencies}