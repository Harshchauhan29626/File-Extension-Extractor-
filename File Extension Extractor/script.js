function extension(){
    let file = document.getElementById("file").value;
    extension = file.split('.').pop();

    document.getElementById("p1").innerHTML = "File Extension: " + extension;
}