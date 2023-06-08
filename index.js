document.addEventListener("DOMContentLoaded", function() {
    var loader = document.getElementById("loader");
    var body = document.getElementById("body")

    setTimeout(function(){
        loader.style.display = "none"
    }, 2000)

    setTimeout(function(){
        body.style.display = "flex"
    }, 2000)
})