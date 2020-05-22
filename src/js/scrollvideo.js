var frameNumber = 0,
playbackConst = 10,
vid = document.getElementById('video1');

function scrollPlay() {
    var hght = document.documentElement.clientHeight
    var viewportOffset = vid.getBoundingClientRect();
// these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    //(70% + высота видео)/количество секунд = 1 секунда в пикселях
    var time = (vid.duration/(hght - vid.offsetHeight)) * (-viewportOffset.top) + vid.duration
    // длительность видео / (высота экрана - высота видео) * (смещение окна -  смещение видео) + длина видео
    var frameNumber = window.pageYOffset / playbackConst;
    vid.currentTime = frameNumber;
    console.log(frameNumber , " | time ", time, " | ", viewportOffset.top, window.pageYOffset)
    vid.currentTime = time
    //window.requestAnimationFrame(scrollPlay);
}
vid.onloadedmetadata = function() {
  //window.addEventListener("scroll", scrollPlay, {passive: true});
  // document.onscroll = function() {
  //     window.requestAnimationFrame(scrollPlay);
  // };
};
window.addEventListener("scroll", scrollPlay, {passive: true});

function detect(elem) {
    var found = document.getElementById(elem)
    if(found === null) return false
    var b_top = found.offsetTop
    var b_bot = found.offsetTop + found.offsetHeight
    var hght = document.documentElement.clientHeight
    var current = window.pageYOffset
    if (current > b_top - hght && current < b_bot) return true
    else return false
  }
