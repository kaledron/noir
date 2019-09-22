document.getElementsByClassName('main')[0].style.display = 'none'; 
document.getElementsByClassName('main-m')[0].style.display = 'block'; 
if (window.innerWidth > 1024 && window.innerHeight > 599 || window.innerWidth > 1079 && window.innerHeight < 1800) {
    document.getElementsByClassName('main')[0].style.display = 'block'; 
    document.getElementsByClassName('main-m')[0].style.display = 'none'; 


    var video = document.getElementById('video');
    video.controls = false;
    video.loop = true;
    video.muted = false;
    video.preload = true;
    video.play();
    var playPromise = video.play();
    setTimeout(() => playPromise.then(() => video.play()).catch(() => "", 29));
} else {
    document.getElementById("2").innerText = "sdfasdfa";

    var video = document.getElementById('video-m');
    video.controls = false;
    video.loop = true;
    video.muted = false;
    video.preload = true;
    video.play();
    var playPromise = video.play();
    setTimeout(() => playPromise.then(() => video.play()).catch(() => "", 29));
    
}
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