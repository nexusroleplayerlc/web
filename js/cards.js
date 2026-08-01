document.querySelectorAll(".card,.news-card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const r=card.getBoundingClientRect();

const x=e.clientX-r.left;

const y=e.clientY-r.top;

const rx=(y-r.height/2)/15;

const ry=(r.width/2-x)/15;

card.style.transform=
`rotateX(${rx}deg)
 rotateY(${ry}deg)
 translateY(-6px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});