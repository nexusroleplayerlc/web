const slider=document.getElementById("newsContainer");

document.getElementById("nextNews").onclick=()=>{

slider.scrollBy({

left:420,

behavior:"smooth"

});

}

document.getElementById("prevNews").onclick=()=>{

slider.scrollBy({

left:-420,

behavior:"smooth"

});

}

let pressed=false;

let startX;

let scrollLeft;

slider.addEventListener("mousedown",e=>{

pressed=true;

startX=e.pageX;

scrollLeft=slider.scrollLeft;

});

slider.addEventListener("mouseleave",()=>{

pressed=false;

});

slider.addEventListener("mouseup",()=>{

pressed=false;

});

slider.addEventListener("mousemove",e=>{

if(!pressed)return;

e.preventDefault();

slider.scrollLeft=scrollLeft-(e.pageX-startX);

});