exports = module.exports = {}
exports.primes = function(arr){
    return arr.join('x')
}

exports.printNum = function(match, contents){
    specifiers = specifiers.split(' ')
}

let printers = {}
printers.raw = function(obj){
    return obj.toString();
}

printers.factors = function(obj){
    let factors = obj.primes();
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

printers.mod = function(obj, modOf){
    if(!modOf) return false;
    return modOf + '%:' +obj % modOf;
}


exports.print = function(obj, format){
    Object.keys(printers).forEach( key =>{
        format = format.replace(new RegExp(key+'(?:_([a-zA-Z0-9]+))?', "g"), (match, contents) => {
            let output = printers[key](obj, contents)
            if(!output){
                return match;
            }else{
                return output;
            }
        });
    })
    return format;
}