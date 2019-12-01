
function primeFactors(n){
    var factors = [], 
        divisor = 2;
  
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }

class Num extends Number{
    constructor(value){
        super(value)
    }
    primes(){
        return primeFactors(this)
    }

}

module.exports = {Num}