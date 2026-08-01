const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const mouse = {
    x: null,
    y: null,
    radius: 140
};

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {

    constructor(){

        this.reset();

    }

    reset(){

        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;

        this.size=Math.random()*2+1;

        this.speedX=(Math.random()-0.5)*0.35;
        this.speedY=(Math.random()-0.5)*0.35;

    }

    update(){

        this.x+=this.speedX;
        this.y+=this.speedY;

        if(this.x<0||this.x>canvas.width)this.speedX*=-1;
        if(this.y<0||this.y>canvas.height)this.speedY*=-1;

        if(mouse.x){

            const dx=this.x-mouse.x;
            const dy=this.y-mouse.y;

            const dist=Math.sqrt(dx*dx+dy*dy);

            if(dist<mouse.radius){

                this.x+=dx/40;
                this.y+=dy/40;

            }

        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fillStyle="rgba(45,212,191,.85)";

        ctx.shadowBlur=12;
        ctx.shadowColor="#2dd4bf";

        ctx.fill();

        ctx.shadowBlur=0;

    }

}

const particles=[];

for(let i=0;i<120;i++){

    particles.push(new Particle());

}

function connect(){

    for(let a=0;a<particles.length;a++){

        for(let b=a;b<particles.length;b++){

            const dx=particles[a].x-particles[b].x;
            const dy=particles[a].y-particles[b].y;

            const distance=Math.sqrt(dx*dx+dy*dy);

            if(distance<120){

                ctx.beginPath();

                ctx.strokeStyle=`rgba(45,212,191,${1-distance/120})`;

                ctx.lineWidth=.25;

                ctx.moveTo(particles[a].x,particles[a].y);

                ctx.lineTo(particles[b].x,particles[b].y);

                ctx.stroke();

            }

        }

    }

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{

        p.update();

        p.draw();

    });

    connect();

    requestAnimationFrame(animate);

}

animate();