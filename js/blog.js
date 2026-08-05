const newsContainer = document.getElementById("newsContainer");

async function loadBlog(){

    if(!newsContainer) return;

    try{

        const response = await fetch(
            "https://nexusroleplayerlc.blogspot.com/feeds/posts/default?alt=json"
        );

        const data = await response.json();

        newsContainer.innerHTML="";

        const posts=data.feed.entry || [];

        posts.slice(0,6).forEach(post=>{

            let title=post.title.$t;

            let url="#";

            post.link.forEach(link=>{

                if(link.rel==="alternate"){

                    url=link.href;

                }

            });

            let image="https://placehold.co/800x500/171C26/2DD4BF?text=Nexus+Roleplay";

            try{

                const html=post.content.$t;

                const doc=new DOMParser().parseFromString(html,"text/html");

                const img=doc.querySelector("img");

                if(img){

                    image=img.src;

                }

            }catch(e){}

            newsContainer.innerHTML+=`

                <a class="news-card"

                href="${url}"

                target="_blank">

                    <img src="${image}" alt="Blog">

                    <div class="news-info">

                        <h3>${title}</h3>

                        <p>

                            Haz clic para leer la noticia completa.

                        </p>

                        <span>

                            Leer más →

                        </span>

                    </div>

                </a>

            `;

        });

    }catch(error){

        newsContainer.innerHTML=`

            <p style="color:white">

                No fue posible cargar las novedades.

            </p>

        `;

        console.error(error);

    }

}

loadBlog();