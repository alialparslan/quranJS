try {
    var mushaf = require("quranjs").mushaf;
}catch{
    var mushaf = require("..").mushaf;
}

let mushafs = mushaf.tanzil.loadDir("data/mushafs")
let tanzilSimple = mushafs.pick('tanzil-simple')


let oddSurahCount = 0
let evenSurahCount = 0

tanzilSimple.forEach( surah => {
    let totalCount = surah.getVerse(0) ? 1 : 0
    totalCount += surah.count
    if(totalCount % 2 == 0){
        evenSurahCount++
    }else{
        oddSurahCount++
    }
})

console.log("There are", oddSurahCount, "surah with odd count of verses")
console.log("And there are", evenSurahCount, "surahs with even count of verses.")