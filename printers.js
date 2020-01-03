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
    return obj.primes().toString();
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