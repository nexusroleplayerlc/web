const BLOG_ID = "5021921879262473177";
const API_KEY = "AIzaSyBfV0JBacR2Yrnn5Yo9fOfygrkoxeB8ygQ";

const newsContainer = document.getElementById("newsContainer");

async function loadBlog() {

    if (!newsContainer) return;

    newsContainer.innerHTML = `
        <div class="news-loading"></div>
        <div class="news-loading"></div>
        <div class="news-loading"></div>
    `;

    try {

        const response = await fetch(
            `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&maxResults=6`
        );

        if (!response.ok) {
            throw new Error("Error API: " + response.status);
        }

        const data = await response.json();

        newsContainer.innerHTML = "";

        data.items.forEach(post => {

            let image = "assets/img/news-default.png";

            if (post.images && post.images.length > 0) {

                image = post.images[0].url;

            }

            const date = new Date(post.published);

            const formattedDate = date.toLocaleDateString("es-UY", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });

            newsContainer.innerHTML += `

            <a class="news-card"

                href="${post.url}"

                target="_blank">

                <img src="${image}" alt="${post.title}">

                <div class="news-info">

                    <small>${formattedDate}</small>

                    <h3>${post.title}</h3>

                    <p>

                        ${post.title}

                    </p>

                    <span>

                        Leer noticia →

                    </span>

                </div>

            </a>

            `;

        });

    }

    catch (err) {

        console.error(err);

        newsContainer.innerHTML = `

        <div class="error-news">

            <h3>

                No fue posible cargar las novedades.

            </h3>

            <p>

                Error:

                ${err.message}

            </p>

        </div>

        `;

    }

}

loadBlog();
