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

// abjad values of special characters
const specialLetters = {
    '\u0622' : "ا", // ARABIC LETTER ALEF WITH MADDA ABOVE
    '\u0623' : "ا", // ARABIC LETTER ALEF WITH HAMZA ABOVE
    '\u0624' : "و", // ARABIC LETTER WAW WITH HAMZA ABOVE
    '\u0625' : "ا", // ARABIC LETTER ALEF WITH HAMZA BELOW
    '\u0626' : "ي", // ARABIC LETTER YEH WITH HAMZA ABOVE
    '\u0671' : "ا", // ARABIC LETTER ALEF WASLA
    
    '\u0629' : abjadValues[21] + abjadValues[4], // ARABIC LETTER TEH MARBUTA
    '\u0649' : abjadValues[0] + abjadValues[9], // ARABIC LETTER ALEF MAKSURA
}
Object.keys(specialLetters).forEach( key => {
    if(typeof specialLetters[key] == 'string'){
        specialLetters[key] = abjadValues[letters.indexOf(specialLetters[key])]
    }
})

const ignore = [
    ' ', // Space 
    '\u0640', // ARABIC TATWEEL
    '\u064b', // ARABIC FATHATAN
    '\u064c', // ARABIC DAMMATAN
    '\u064d', // ARABIC KASRATAN
    '\u064e', // ARABIC FATHA
    '\u064f', // ARABIC DAMMA
    '\u0650', // ARABIC KASRA
    '\u0651', // ARABIC SHADDA
    '\u0652', // ARABIC SUKUN
    '\u0653', // ARABIC MADDAH ABOVE
    '\u0654', // ARABIC HAMZA ABOVE
    '\u06dc', // ARABIC SMALL HIGH SEEN
    '\u06df', // ARABIC SMALL HIGH ROUNDED ZERO
    '\u06e0', // ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO
    '\u06e2', // ARABIC SMALL HIGH MEEM ISOLATED FORM
    '\u06e3', // ARABIC SMALL LOW SEEN
    '\u06e5', // ARABIC SMALL WAW
    '\u06e6', // ARABIC SMALL YEH
    '\u06e8', // ARABIC SMALL HIGH NOON
    '\u06ea', // ARABIC EMPTY CENTRE LOW STOP
    '\u06eb', // ARABIC EMPTY CENTRE HIGH STOP
    '\u06ec', // ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE
    '\u06ed', // ARABIC SMALL LOW MEEM
    


    '\u0621', // ARABIC LETTER HAMZA
    '\u0670', // ARABIC LETTER SUPERSCRIPT ALEF
]

function valToCodePoint(val){
    let hex = val.toString(16)
    return "\\u" + "0000".substring(0, 4 - hex.length) + hex;
}

function calcAbjad(text){
    let val = 0;
    for(let i=0; i<text.length; i++){
        let find = letters.indexOf(text.charAt(i));
        if(find > -1){
            val += abjadValues[find];
        }else if(specialLetters[text.charAt(i)] != undefined){
            val += specialLetters[text.charAt(i)]
        }else if(ignore.indexOf(text.charAt(i)) == -1){
            console.log("Unexpected: ", valToCodePoint(text.codePointAt(i)))
        }
    }
    return val
}
function countLetters(text){
    let val = 0;
    for(let i=0; i<text.length; i++){
        let find = letters.indexOf(text.charAt(i));
        if(find > -1){
            val += 1
        }
    }
    return val  
}

function countWords(text){
    return text.match(/(?<=[^\s]+)\s+(?=[^\s]+)/ug).length+1
}

module.exports = {calcAbjad, countLetters, countWords}