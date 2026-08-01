const menu=document.getElementById("mobileMenu");

const overlay=document.getElementById("overlay");

document.getElementById("menuBtn").onclick=()=>{

menu.classList.add("open");

overlay.classList.add("show");

}

document.getElementById("closeMenu").onclick=closeMenu;

overlay.onclick=closeMenu;

function closeMenu(){

menu.classList.remove("open");

overlay.classList.remove("show");

}