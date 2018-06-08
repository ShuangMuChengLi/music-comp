function musicComp(musicList) {
    var audioEle = document.createElement("audio");
    audioEle.id = "music";
    audioEle.setAttribute("class", "audio");
    audioEle.setAttribute("controls", "controls");
    audioEle.innerHTML = '<source src="" id="musicSource">';
    var aEle = document.createElement("a");
    aEle.setAttribute("href","javascript:void(0)");
    aEle.setAttribute("class","music-icon animation animation-paused");
    aEle.id = "musicIcon";
    document.body.appendChild(audioEle);
    document.body.appendChild(aEle);
    window.onload = function () {
        var musicIcon = document.getElementById("musicIcon");
        var music = document.getElementById("music");
        var musicSource = document.getElementById("musicSource");
        var musicRuning = false;
        var index = 0;
        function play() {
            if(++index ===  musicList.length){
                index = 0;
            }
            musicSource.src = musicList[index];
            music.load();
            music.play();
        }

        musicSource.onerror = function () {
            musicList.splice(index,1);
            play();
        };
        // musicSource.setAttribute("src",musicList[0]);
        musicSource.src = musicList[index];
        music.load();

        musicIcon.addEventListener("click",function (e) {
            if(musicRuning){
                this.setAttribute("class",  "music-icon animation animation-paused");
                music.pause();
            }else{
                this.setAttribute("class",  "music-icon animation animation-runing");
                music.play();
            }
            musicRuning = !musicRuning;
        });
        music.onended = play;
    }
}
if (typeof module !== "undefined") {
    module.exports = musicComp;
}
if (typeof window !== "undefined") {
    window.musicComp = musicComp;
}