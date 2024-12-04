var btn = document.querySelector(".btn");
var body = document.querySelector("body");
btn.onclick = function(){
    this.classList.toggle("active");
    body.classList.toggle("active");
}