const feed =
"https://nexusroleplayerlc.blogspot.com/feeds/posts/default?alt=json";

fetch(feed)
.then(r=>r.json())
.then(data=>{

const container=document.getElementById("newsContainer");

const posts=data.feed.entry||[];

posts.slice(0,8).forEach(post=>{

let title=post.title.$t;

let link="";

post.link.forEach(l=>{

if(l.rel==="alternate"){

link=l.href;

}

});

let date=new Date(post.published.$t);

date=date.toLocaleDateString("es-UY");

let image="https://placehold.co/700x400/151922/2dd4bf?text=Nexus+Roleplay";

try{

const html=post.content.$t;

const doc=new DOMParser().parseFromString(html,"text/html");

const img=doc.querySelector("img");

if(img){

image=img.src;

}

}catch(e){}

container.innerHTML+=`

<a class="news-card"

href="${link}"

target="_blank">

<img src="${image}">

<div class="news-info">

<h3>${title}</h3>

<p>${date}</p>

<span>Leer noticia →</span>

</div>

</a>

`;

});

});