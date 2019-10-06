if (window.innerWidth < 1081) {
    v_type = document.getElementById('video').currentSrc.split('/');
    v_type = v_type[v_type.length-1];
    v_type = v_type.split('.')[1];
    document.getElementById("video").src = "img/noir-m."+v_type;
    console.log(document.getElementById("video"));
    // alert('Screen Widht: ' + window.innerWidth + "\n Screen Height1: " + window.innerHeight);
}
