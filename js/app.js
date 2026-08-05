const backButton = document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        backButton.classList.add("show");

    }else{

        backButton.classList.remove("show");

    }

});

backButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const glow=document.getElementById("cursorGlow");

window.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});