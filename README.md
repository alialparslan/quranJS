**I will probably won't complete documenatation soon. If i will ever though. Check out examples if you are interested**
**It is experimental especially word count function does not work properly. Rest is probably fine though.**

    npm install quranjs

Currently this api only works with [tanzil files](http://tanzil.net/download). "Text (with aya numbers)" option has to be selected when downloading.
Currently this api is just for original Quran. In context of this package Quran translations are not relavent.
### Classes
* **Mushafs**: Holds Mushaf objects. It has forEach method which calls function with mushafs in it but it does not extends Container because many call would be meaningless. Extends policiy manager. Has no parent. Has pick function which returns new Mushafs object from selected mushafs.

### Container Classes
Classes that extends Container class which also extends policyManager.

* **Mushaf**: Container of Surah objects. Has select function which returns a VerseRange object.
* **Surah**: Container of verses with surah number. Verse number starts from zero index. It and only it may be false which means sura does not have a Basmala without verse number (Surahs 1 and 9).
* **VerseRange**: Container of verses. Starting from any point and ending at any point.
You can set policiy at any container or you can directly change modules defaults with setPolicy. Any container which does not have a policy set will recursively use parents. By default there is no policy set for any object so module defaults will be used.

##### Container methods:
* **count**: counts of verses in it if it is verse container or in its childs if its chids are also container.
* **abjad**: Total abjad value of its childs. Returns Num.
* **letterCount**: Total letter count of its childs. Returns Num.
* **wordCount**: Total word count of its childs. Returns Num.
* **search**: Not implemented yet. // Returns Match object.
* **letterFrequencies**: How many are there of each letter. Returns Frequencies object.

### Types
* **Factors**: Stores primes of a factorized number. Has a proper toString method. Outputs factors like `2^5 x 3x3 x 7`
* **Num**: Extends native Number.
* * primes method returns Factors object.
* * toString method has a format parameter when called without any parameter function returns just string of number but when called with format argument replaces predefined keywords with corresponding outputs.
* * * "raw" replaces with number itself.
* * * "mod_X" replaced with reminder of number divided by X.
* * * "factors" replaced with prime factors.
```
let aNum = new Num(58);
aNum.toString("raw, mod_19, primes: factors") // "58, 19%:1, primes: 2 x 29"
```

### Util Functions
You can override letter map with calling this module as a function
```
// false value for hamza means do not consider hamza as a arabic letter. Or simply ignore it like Asra or kasra...
// When letter has a number value it will be considered as a Arabic letter even if it has 0 value
const utilsWithoutHamza = require('quranjs').utils({'ء' : false});
// Or you can just import this module without any parameter if you wanna keep default letter map.
const utils = require('quranjs').utils;
```
* **countWords**(string): Counts words with arabic letters. Returns Num.
* **countLetters**(string): Counts arabic letters only in string. Returns Num.
* **calcAbjad**(string): Calculates abjad value of whole string. Returns Num.
* **letterFrequencies**(string): Counts how many there are from each Arabic letters. Return Frequencies object.
* **extractLetters**(string): Returns array of Arabic letters exists in letter map