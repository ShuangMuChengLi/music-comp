
#API

This is a music component of html5.

demo: https://www.linchaoqun.com/



#install
```bash
npm install music-comp
```

#import
By window
```bash
<link href="/music-comp/css/index.css" rel="stylesheet">
<script src="/music-comp/index.js"></script>
```
By commonJS
 
```bash
requrie("music-comp/css/index.css");
var musicComp = requrie("music-comp");
```
 
 
#usage
```bash
var musicList = [
    "music/horse.mp3",
    {
        name: "心经",
        singer: "王菲",
        src: "music/heart-sutra.mp3"
    }
];
musicComp(musicList);
```