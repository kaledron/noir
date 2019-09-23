document.getElementsByClassName('main')[0].style.display = 'none'; 
document.getElementsByClassName('main-m')[0].style.display = 'block'; 
if (window.innerWidth > 1024 && window.innerHeight > 599 || window.innerWidth > 1079 && window.innerHeight < 1800) {
    document.getElementsByClassName('main')[0].style.display = 'block'; 
    document.getElementsByClassName('main-m')[0].style.display = 'none'; 


    var video = document.getElementById('video');
} else {
    document.getElementById("2").innerText = "sdfasdfa";

    var video = document.getElementById('video-m');
}

// video.controls = false;
// video.loop = true;
// video.muted = false;
// // video.preload = true;
// // video.click();
// // video.play();
// var playPromise = video.play();
// setTimeout(() => playPromise.then(_ => {} ).catch(() => "", 29));


var t1 = 29001; // / If polling, this time must be longer than the length of the video. In the case of webscoket, a status play should be set to avoid repetition, as follows:
var t2 = 29000; // video length to ensure full playback to users
var play = false;
function run(){
    if (play) {
        return false;
    }
    video.currentTime = 0; // Sets the start time of the playing video
    video.muted = false; // Turn off silent state
    video.volume = 0.9; // Set the sound size of the video
    play = true;
    setTimeout(function(){
        play = false;
        video.muted = true; // After playing, turn on the mute state
    },t2);
}
setInterval(function(){
    run(); // pretend to be polling server or pull data from websocket
},t1);


// if (playPromise !== undefined) {
//     playPromise.then(function() {
//         setTimeout(30);
//     }).catch(function() {
//         setTimeout(30);
//         // video.play();
//     })
// } else {
//     video.play();
// }