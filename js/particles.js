const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];
const COUNT = 80;

class Particle {

    constructor() {

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - .5) * .35;
        this.vy = (Math.random() - .5) * .35;

        this.size = Math.random() * 2 + 1;

    }

    update() {

        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fillStyle = "#2DD4BF";

        ctx.fill();

    }

}

for (let i = 0; i < COUNT; i++) {

    particles.push(new Particle());

}

function connect() {

    for (let a = 0; a < COUNT; a++) {

        for (let b = a + 1; b < COUNT; b++) {

            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 130) {

                ctx.beginPath();

                ctx.moveTo(particles[a].x, particles[a].y);

                ctx.lineTo(particles[b].x, particles[b].y);

                ctx.strokeStyle = `rgba(45,212,191,${1 - distance / 130})`;

                ctx.lineWidth = .4;

                ctx.stroke();

            }

        }

    }

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {

        p.update();
        p.draw();

    });

    connect();

    requestAnimationFrame(animate);

}

animate();