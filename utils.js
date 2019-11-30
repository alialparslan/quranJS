const letters=[
    //0   1    2    3    4    5    6    7    8    9    10   11   12   13  14   15   16   17
    "ا", "ب", "ج", "د", "ه", "و", "ز", "ح", "ط", "ي", "ك", "ل", "م", "ن", "س", "ع", "ف", "ص",
    //18  19   20   21   22   23   24   25  26    27 
    "ق", "ر", "ش", "ت", "ث", "خ", "ذ", "ض", "ظ", "غ"
]
const abjadValues=[
    1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,
    100,200,300,400,500,600,700,800,900,1000
]

function calcAbjad(text){
    let val = 0;
    for(let i=0; i<text.length; i++){
        let find = letters.indexOf(text.charAt(i));
        if(find > -1){
            val += abjadValues[find];
        }
    }
    return val
}

module.exports = {calcAbjad}