var menu = document.querySelector("#menu");
var close = document.querySelector("#close");
var aside = document.querySelector("aside");
menu.addEventListener("click", function () {
    aside.style.display="flex";
    transition="1s";
  aside.style.marginLeft = "-188px";
});
close.addEventListener("click", function () {
  aside.style.display="none";
  transition="1s";
  aside.style.marginLeft = "90px";
});
var l=document.querySelector("aside a");
l.addEventListener("click",function(){
    aside.style.display="none";
    aside.style.marginLeft="90px"
})
