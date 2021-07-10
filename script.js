window.addEventListener("scroll" ,function(){
    var header = document.querySelector(".nav-bar");
    header.classList.toggle("sticky",window.scrollY>0);
})