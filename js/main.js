var nav=document.querySelector("nav");
window.addEventListener("scroll",function(){
    if(window.scrollY>=nav.offsetHeight){
        nav.classList.add("nav-shadow");
    }else{
        nav.classList.remove("nav-shadow");
    }
});