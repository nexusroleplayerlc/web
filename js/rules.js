const container=document.getElementById("rulesContainer");

async function loadRules(){

const response=await fetch("data/rules.json");

const rules=await response.json();

let html="";

let currentCategory="";

rules.forEach(rule=>{

if(currentCategory!==rule.category){

currentCategory=rule.category;

html+=`

<section id="${rule.category.toLowerCase()}">

<div class="category-header">

<h2>${rule.category}</h2>

</div>

`;

}

html+=`

<div class="rule-card" id="${rule.id}">

<div class="rule-top">

<h3>${rule.title}</h3>

<a href="https://docs.google.com/document/d/1p-7z3U74Z8YNKQhuBUrSMaxSS35fFYIoXdrUCoWe6go/edit?usp=sharing" target="_blank" rel="noopener noreferrer" class="open-link">
    Abrir Normas
</a>

</div>

<div class="rule-tags">

${rule.tags.map(tag=>`<span>${tag}</span>`).join("")}

</div>

<p>

${rule.content}

</p>

</div>

`;

});

container.innerHTML=html;

enableSearch();

}

function enableSearch(){

const search=document.getElementById("ruleSearch");

search.addEventListener("input",()=>{

const value=search.value.toLowerCase();

document.querySelectorAll(".rule-card")

.forEach(card=>{

card.style.display=

card.innerText.toLowerCase()

.includes(value)

?

"block"

:

"none";

});

});

}

loadRules();

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

const id=entry.target.id;

const link=document.querySelector(`a[href="#${id}"]`);

if(!link)return;

if(entry.isIntersecting){

document.querySelectorAll(".rules-sidebar nav a")

.forEach(a=>a.classList.remove("active"));

link.classList.add("active");

}

});

},{
threshold:.35
});

setTimeout(()=>{

document.querySelectorAll(".rules-content section")

.forEach(section=>observer.observe(section));

},500);

/*=========================
BARRA DE LECTURA
=========================*/

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const progress=

(window.scrollY/total)*100;

document.getElementById("readingBar").style.width=

progress+"%";

});

/*=========================
ACORDEÓN
=========================*/

setTimeout(()=>{

document.querySelectorAll(".category-header")

.forEach(header=>{

header.onclick=()=>{

header.classList.toggle("open");

const section=header.parentElement;

const cards=

section.querySelectorAll(".rule-card");

cards.forEach(card=>{

card.classList.toggle("hidden");

});

};

});

},400);
