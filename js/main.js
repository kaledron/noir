if (window.innerWidth < 1081) {
    v_type = document.getElementById('video').currentSrc.split('/');
    v_type = v_type[v_type.length-1];
    v_type = v_type.split('.')[1];
    document.getElementById("video").src = "img/noir-m."+v_type;
}

function sendEmail() {
    var request = new XMLHttpRequest();

    request.open("POST", "email.php");
 
    request.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            document.getElementById("result").innerHTML = this.responseText;
        }
    };

    var myForm = document.getElementById("bebetter");
    var formData = new FormData(myForm);
    
    request.send(formData);
}