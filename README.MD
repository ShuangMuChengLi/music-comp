
#API

This is a music component of html5.

demo: https://www.linchaoqun.com/



#install
```bash
npm install music-comp
```


By window
```bash
<link href="/music-comp/css/index.css" rel="stylesheet">
<script src="/music-comp/index.js"></script>
```
 
```bash
var musicList = [
    "music/horse.mp3"
];
musicComp(musicList);
```
 
 By commonJS
 
```bash
requrie("music-comp/css/index.css");
var musicComp = requrie("music-comp");
```
 
```bash
var musicList = [
    "music/horse.mp3"
];
musicComp(musicList);
```