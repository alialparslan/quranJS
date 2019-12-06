# It's In Initial Developments Phase
**I will probably won't complete documenatation soon even if i ever will. Check out examples if you are interested**

You can request any functionality you want over [github](https://github.com/alialparslan/quranJS/labels/enhancement).

    npm install quranjs

Currently this api only works with [tanzil files](http://tanzil.net/download). "Text (with aya numbers)" option has to be selected when downloading.
### Objects
* Mushafs: Contians multiple mushaf object in itself, there isn't important functionality implemented yet.
* Mushaf: This is most important object which holds all verses of Quran from loaded mushaf file. It will hold Surah objects
* Surah: Holds verses
* Verse: Holds single verse itself
* Num: Abjad methods of various objects returns this. It extends Number objects and implements useful calls for ease of interacting with numbers.


## Examples
### node examples/fatiha.js 
<pre>
tanzil-simple-clean: 
<font color="#555753">┌───────┬───────────────┬────────────┬──────────────┬─────────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad         </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                                 </font><font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ا,ل,ل,ه,ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131   <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 582           <font color="#555753">│</font> 4          <font color="#555753">│</font> 18           <font color="#555753">│</font> ا,ل,ح,م,د,ل,ل,ه,ر,ب,ا,ل,ع,ا,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 97    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618           <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103   <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 242           <font color="#555753">│</font> 3          <font color="#555753">│</font> 12           <font color="#555753">│</font> م,ا,ل,ك,ي,و,م,ا,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 11x11     <font color="#555753">│</font> 3          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> إ,ي,ا,ك,ن,ع,ب,د,و,إ,ي,ا,ك,ن,س,ت,ع,ي,ن                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19 <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1073          <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ه,د,ن,ا,ا,ل,ص,ر,ا,ط,ا,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 29 x 37       <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6010          <font color="#555753">│</font> 9          <font color="#555753">│</font> 44           <font color="#555753">│</font> ص,ر,ا,ط,ا,ل,ذ,ي,ن,أ,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ا,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ا,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 5 x 601   <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 2x2 x 11     <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10147         <font color="#555753">│</font> 29         <font color="#555753">│</font> 143          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 73 x 139      <font color="#555753">│</font> 29         <font color="#555753">│</font> 11 x 13      <font color="#555753">│</font>
<font color="#555753">└───────┴───────────────┴────────────┴──────────────┴─────────────────────────────────────────────────────────────────────────────────────────┘</font>
tanzil-uthmani: 
<font color="#555753">┌───────┬────────────────┬────────────┬──────────────┬───────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad          </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                               </font><font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786            <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ٱ,ل,ل,ه,ٱ,ل,ر,ح,م,ن,ٱ,ل,ر,ح,ي,م                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 581            <font color="#555753">│</font> 4          <font color="#555753">│</font> 17           <font color="#555753">│</font> ٱ,ل,ح,م,د,ل,ل,ه,ر,ب,ٱ,ل,ع,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 7 x 83         <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 17           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618            <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ٱ,ل,ر,ح,م,ن,ٱ,ل,ر,ح,ي,م                                                               <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103    <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 241            <font color="#555753">│</font> 3          <font color="#555753">│</font> 11           <font color="#555753">│</font> م,ل,ك,ي,و,م,ٱ,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 241            <font color="#555753">│</font> 3          <font color="#555753">│</font> 11           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836            <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> إ,ي,ا,ك,ن,ع,ب,د,و,إ,ي,ا,ك,ن,س,ت,ع,ي,ن                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19  <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1072           <font color="#555753">│</font> 3          <font color="#555753">│</font> 18           <font color="#555753">│</font> ٱ,ه,د,ن,ا,ٱ,ل,ص,ر,ط,ٱ,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2^4 x 67       <font color="#555753">│</font> 3          <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6009           <font color="#555753">│</font> 9          <font color="#555753">│</font> 43           <font color="#555753">│</font> ص,ر,ط,ٱ,ل,ذ,ي,ن,أ,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ٱ,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ٱ,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 3 x 2003       <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 43           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10143          <font color="#555753">│</font> 29         <font color="#555753">│</font> 139          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 3x3 x 7x7 x 23 <font color="#555753">│</font> 29         <font color="#555753">│</font> 139          <font color="#555753">│</font>
<font color="#555753">└───────┴────────────────┴────────────┴──────────────┴───────────────────────────────────────────────────────────────────────────────────────┘</font>
tanzil-uthmani-min: 
<font color="#555753">┌───────┬────────────────┬────────────┬──────────────┬───────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad          </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                               </font><font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786            <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ا,ل,ل,ه,ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 581            <font color="#555753">│</font> 4          <font color="#555753">│</font> 17           <font color="#555753">│</font> ا,ل,ح,م,د,ل,ل,ه,ر,ب,ا,ل,ع,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 7 x 83         <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 17           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618            <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                               <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103    <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 241            <font color="#555753">│</font> 3          <font color="#555753">│</font> 11           <font color="#555753">│</font> م,ل,ك,ي,و,م,ا,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 241            <font color="#555753">│</font> 3          <font color="#555753">│</font> 11           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836            <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> إ,ي,ا,ك,ن,ع,ب,د,و,إ,ي,ا,ك,ن,س,ت,ع,ي,ن                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19  <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1072           <font color="#555753">│</font> 3          <font color="#555753">│</font> 18           <font color="#555753">│</font> ا,ه,د,ن,ا,ا,ل,ص,ر,ط,ا,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2^4 x 67       <font color="#555753">│</font> 3          <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6009           <font color="#555753">│</font> 9          <font color="#555753">│</font> 43           <font color="#555753">│</font> ص,ر,ط,ا,ل,ذ,ي,ن,أ,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ا,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ا,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 3 x 2003       <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 43           <font color="#555753">│</font>                                                                                       <font color="#555753">│</font>
<font color="#555753">├───────┼────────────────┼────────────┼──────────────┼───────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10143          <font color="#555753">│</font> 29         <font color="#555753">│</font> 139          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 3x3 x 7x7 x 23 <font color="#555753">│</font> 29         <font color="#555753">│</font> 139          <font color="#555753">│</font>
<font color="#555753">└───────┴────────────────┴────────────┴──────────────┴───────────────────────────────────────────────────────────────────────────────────────┘</font>
diyanet-2: 
<font color="#555753">┌───────┬───────────────┬────────────┬──────────────┬─────────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad         </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                                 </font><font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ا,ل,ل,ه,ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131   <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 582           <font color="#555753">│</font> 4          <font color="#555753">│</font> 18           <font color="#555753">│</font> ا,ل,ح,م,د,ل,ل,ه,ر,ب,ا,ل,ع,ا,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 97    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618           <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103   <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 242           <font color="#555753">│</font> 3          <font color="#555753">│</font> 12           <font color="#555753">│</font> م,ا,ل,ك,ي,و,م,ا,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 11x11     <font color="#555753">│</font> 3          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ي,ا,ك,ن,ع,ب,د,و,ا,ي,ا,ك,ن,س,ت,ع,ي,ن                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19 <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1073          <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ه,د,ن,ا,ا,ل,ص,ر,ا,ط,ا,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 29 x 37       <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6010          <font color="#555753">│</font> 9          <font color="#555753">│</font> 44           <font color="#555753">│</font> ص,ر,ا,ط,ا,ل,ذ,ي,ن,ا,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ا,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ا,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 5 x 601   <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 2x2 x 11     <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10147         <font color="#555753">│</font> 29         <font color="#555753">│</font> 143          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 73 x 139      <font color="#555753">│</font> 29         <font color="#555753">│</font> 11 x 13      <font color="#555753">│</font>
<font color="#555753">└───────┴───────────────┴────────────┴──────────────┴─────────────────────────────────────────────────────────────────────────────────────────┘</font>
diyanet-3: 
<font color="#555753">┌───────┬───────────────┬────────────┬──────────────┬─────────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad         </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                                 </font><font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ا,ل,ل,ه,ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131   <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 582           <font color="#555753">│</font> 4          <font color="#555753">│</font> 18           <font color="#555753">│</font> ا,ل,ح,م,د,ل,ل,ه,ر,ب,ا,ل,ع,ا,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 97    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618           <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103   <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 242           <font color="#555753">│</font> 3          <font color="#555753">│</font> 12           <font color="#555753">│</font> م,ا,ل,ك,ي,و,م,ا,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 11x11     <font color="#555753">│</font> 3          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> إ,ي,ا,ك,ن,ع,ب,د,و,إ,ي,ا,ك,ن,س,ت,ع,ي,ن                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19 <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1073          <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ه,د,ن,ا,ا,ل,ص,ر,ا,ط,ا,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 29 x 37       <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6010          <font color="#555753">│</font> 9          <font color="#555753">│</font> 44           <font color="#555753">│</font> ص,ر,ا,ط,ا,ل,ذ,ي,ن,أ,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ا,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ا,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 5 x 601   <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 2x2 x 11     <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10147         <font color="#555753">│</font> 29         <font color="#555753">│</font> 143          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 73 x 139      <font color="#555753">│</font> 29         <font color="#555753">│</font> 11 x 13      <font color="#555753">│</font>
<font color="#555753">└───────┴───────────────┴────────────┴──────────────┴─────────────────────────────────────────────────────────────────────────────────────────┘</font>
diyanet-7: 
<font color="#555753">┌───────┬───────────────┬────────────┬──────────────┬─────────────────────────────────────────────────────────────────────────────────────────┐</font>
<font color="#555753">│</font><font color="#CC0000"> No    </font><font color="#555753">│</font><font color="#CC0000"> Abjad         </font><font color="#555753">│</font><font color="#CC0000"> Word Count </font><font color="#555753">│</font><font color="#CC0000"> Letter Count </font><font color="#555753">│</font><font color="#CC0000"> Letters                                                                                 </font><font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 1     <font color="#555753">│</font> 786           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ب,س,م,ا,ل,ل,ه,ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 131   <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 2     <font color="#555753">│</font> 582           <font color="#555753">│</font> 4          <font color="#555753">│</font> 18           <font color="#555753">│</font> ا,ل,ح,م,د,ل,ل,ه,ر,ب,ا,ل,ع,ا,ل,م,ي,ن                                                     <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 97    <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 2 x 3x3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 3     <font color="#555753">│</font> 618           <font color="#555753">│</font> 2          <font color="#555753">│</font> 12           <font color="#555753">│</font> ا,ل,ر,ح,م,ن,ا,ل,ر,ح,ي,م                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 3 x 103   <font color="#555753">│</font> 2          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 4     <font color="#555753">│</font> 242           <font color="#555753">│</font> 3          <font color="#555753">│</font> 12           <font color="#555753">│</font> م,ا,ل,ك,ي,و,م,ا,ل,د,ي,ن                                                                 <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 11x11     <font color="#555753">│</font> 3          <font color="#555753">│</font> 2x2 x 3      <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 5     <font color="#555753">│</font> 836           <font color="#555753">│</font> 4          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ي,ا,ك,ن,ع,ب,د,و,ا,ي,ا,ك,ن,س,ت,ع,ي,ن                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2x2 x 11 x 19 <font color="#555753">│</font> 2x2        <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 6     <font color="#555753">│</font> 1073          <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font> ا,ه,د,ن,ا,ا,ل,ص,ر,ا,ط,ا,ل,م,س,ت,ق,ي,م                                                   <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 29 x 37       <font color="#555753">│</font> 3          <font color="#555753">│</font> 19           <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> 7     <font color="#555753">│</font> 6010          <font color="#555753">│</font> 9          <font color="#555753">│</font> 44           <font color="#555753">│</font> ص,ر,ا,ط,ا,ل,ذ,ي,ن,ا,ن,ع,م,ت,ع,ل,ي,ه,م,غ,ي,ر,ا,ل,م,غ,ض,و,ب,ع,ل,ي,ه,م,و,ل,ا,ا,ل,ض,ا,ل,ي,ن <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 2 x 5 x 601   <font color="#555753">│</font> 3x3        <font color="#555753">│</font> 2x2 x 11     <font color="#555753">│</font>                                                                                         <font color="#555753">│</font>
<font color="#555753">├───────┼───────────────┼────────────┼──────────────┼─────────────────────────────────────────────────────────────────────────────────────────┤</font>
<font color="#555753">│</font> Total <font color="#555753">│</font> 10147         <font color="#555753">│</font> 29         <font color="#555753">│</font> 143          <font color="#555753">│</font>
<font color="#555753">│</font>       <font color="#555753">│</font> 73 x 139      <font color="#555753">│</font> 29         <font color="#555753">│</font> 11 x 13      <font color="#555753">│</font>
<font color="#555753">└───────┴───────────────┴────────────┴──────────────┴─────────────────────────────────────────────────────────────────────────────────────────┘</font></pre> 

## node examples/mushafStats.js 

Basmalas included:
┌─────────────────────┬─────────────────────────┬─────────────────────┬───────────────────┐
│ Mushaf              │ Abjad Total             │ Word count          │ Letter Count      │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ tanzil-simple-clean │ 23476093                │ 78245               │ 332837            │
│                     │ 37 x 109 x 5821         │ 5 x 15649           │ 332837            │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ tanzil-uthmani      │ 23469389                │ 77878               │ 327793            │
│                     │ 19 x 89 x 13879         │ 2 x 23 x 1693       │ 163 x 2011        │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ tanzil-uthmani-min  │ 23469390                │ 77878               │ 327794            │
│                     │ 2 x 3x3 x 5 x 7 x 37253 │ 2 x 23 x 1693       │ 2 x 17 x 31 x 311 │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ diyanet-2           │ 23473602                │ 78220               │ 331791            │
│                     │ 2 x 3x3 x 1304089       │ 2x2 x 5 x 3911      │ 3 x 110597        │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ diyanet-3           │ 23456668                │ 77900               │ 333687            │
│                     │ 2x2 x 17 x 37 x 9323    │ 2x2 x 5x5 x 19 x 41 │ 3 x 111229        │
├─────────────────────┼─────────────────────────┼─────────────────────┼───────────────────┤
│ diyanet-7           │ 23473612                │ 78286               │ 331792            │
│                     │ 2x2 x 97 x 101 x 599    │ 2 x 13 x 3011       │ 2^4 x 89 x 233    │
└─────────────────────┴─────────────────────────┴─────────────────────┴───────────────────┘
Baslamas excluded:
┌─────────────────────┬────────────────────────────────┬─────────────────────┬────────────────────┐
│ Mushaf              │ Abjad Total                    │ Word count          │ Letter Count       │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-simple-clean │ 23388061                       │ 77797               │ 330709             │
│                     │ 23388061                       │ 77797               │ 223 x 1483         │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-uthmani      │ 23381357                       │ 77430               │ 325665             │
│                     │ 41 x 487 x 1171                │ 2 x 3 x 5 x 29 x 89 │ 3x3 x 5 x 7237     │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-uthmani-min  │ 23381358                       │ 77430               │ 325666             │
│                     │ 2 x 3 x 7 x 11 x 13 x 17 x 229 │ 2 x 3 x 5 x 29 x 89 │ 2 x 11 x 113 x 131 │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-2           │ 23385570                       │ 77772               │ 329663             │
│                     │ 2 x 3 x 5 x 13 x 61 x 983      │ 2x2 x 3 x 6481      │ 329663             │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-3           │ 23368636                       │ 77452               │ 331559             │
│                     │ 2x2 x 5842159                  │ 2x2 x 17x17 x 67    │ 233 x 1423         │
├─────────────────────┼────────────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-7           │ 23385580                       │ 77838               │ 329664             │
│                     │ 2x2 x 5 x 19x19 x 41 x 79      │ 2 x 3 x 12973       │ 2^6 x 3 x 17 x 101 │
└─────────────────────┴────────────────────────────────┴─────────────────────┴────────────────────┘
Hamzas ignored, Basmalas included:
┌─────────────────────┬──────────────────────────┬─────────────────────┬────────────────────┐
│ Mushaf              │ Abjad Total              │ Word count          │ Letter Count       │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-simple-clean │ 23474515                 │ 78245               │ 331259             │
│                     │ 5 x 4694903              │ 5 x 15649           │ 331259             │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-uthmani      │ 23466330                 │ 77878               │ 324734             │
│                     │ 2 x 3x3 x 5 x 19 x 13723 │ 2 x 23 x 1693       │ 2 x 17 x 9551      │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ tanzil-uthmani-min  │ 23466330                 │ 77878               │ 324734             │
│                     │ 2 x 3x3 x 5 x 19 x 13723 │ 2 x 23 x 1693       │ 2 x 17 x 9551      │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-2           │ 23472056                 │ 78220               │ 330245             │
│                     │ 2x2x2 x 131 x 22397      │ 2x2 x 5 x 3911      │ 5 x 257x257        │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-3           │ 23454029                 │ 77900               │ 331048             │
│                     │ 313 x 74933              │ 2x2 x 5x5 x 19 x 41 │ 2x2x2 x 41381      │
├─────────────────────┼──────────────────────────┼─────────────────────┼────────────────────┤
│ diyanet-7           │ 23472066                 │ 78286               │ 330246             │
│                     │ 2 x 3 x 43 x 90977       │ 2 x 13 x 3011       │ 2 x 3x3 x 7 x 2621 │
└─────────────────────┴──────────────────────────┴─────────────────────┴────────────────────┘
Hamzas ignored, Basmalas excluded:
┌─────────────────────┬────────────────────────┬─────────────────────┬──────────────────────┐
│ Mushaf              │ Abjad Total            │ Word count          │ Letter Count         │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ tanzil-simple-clean │ 23386483               │ 77797               │ 329131               │
│                     │ 23386483               │ 77797               │ 11 x 29921           │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ tanzil-uthmani      │ 23378298               │ 77430               │ 322606               │
│                     │ 2 x 3 x 17 x 229199    │ 2 x 3 x 5 x 29 x 89 │ 2 x 161303           │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ tanzil-uthmani-min  │ 23378298               │ 77430               │ 322606               │
│                     │ 2 x 3 x 17 x 229199    │ 2 x 3 x 5 x 29 x 89 │ 2 x 161303           │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ diyanet-2           │ 23384024               │ 77772               │ 328117               │
│                     │ 2x2x2 x 53 x 131 x 421 │ 2x2 x 3 x 6481      │ 17 x 19301           │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ diyanet-3           │ 23365997               │ 77452               │ 328920               │
│                     │ 23365997               │ 2x2 x 17x17 x 67    │ 2x2x2 x 3 x 5 x 2741 │
├─────────────────────┼────────────────────────┼─────────────────────┼──────────────────────┤
│ diyanet-7           │ 23384034               │ 77838               │ 328118               │
│                     │ 2 x 3x3 x 29 x 44797   │ 2 x 3 x 12973       │ 2 x 7 x 23 x 1019    │
└─────────────────────┴────────────────────────┴─────────────────────┴──────────────────────┘
It took 3485ms to execute.
