# It is not ready for use yet!
You can request any functionality you want over [github](https://github.com/alialparslan/quranJS/labels/enhancement).

    npm install quranjs

Currently this api only works with [tanzil files](http://tanzil.net/download).  Text (with aya numbers) has to be selected when downloading.
### Objects
* Mushafs: Contians multiple mushaf object in itself, there isn't important functionality implemented yet.
* Mushaf: This is most important object which holds all verses of Quran from loaded mushaf file. It will hold Surah objects
* Surahs: Holds verses
* Verse: Holds single verse itself
* Num: Abjad methods of various objects returns this. It extends Number objects and implements useful calls for ease of interacting with numbers.
### Api