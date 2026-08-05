const memberCounter = document.getElementById("discordMembers");

async function loadDiscord(){

    if(!memberCounter) return;

    try{

        const response=await fetch(

            "https://discord.com/api/guilds/1277141490140840017/widget.json"

        );

        const data=await response.json();

        if(data.presence_count!==undefined){

            memberCounter.textContent=data.presence_count;

        }else{

            memberCounter.textContent="---";

        }

    }catch(e){

        memberCounter.textContent="---";

    }

}

loadDiscord();