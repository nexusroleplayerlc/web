const guild = "1277141490140840017";

fetch(`https://discord.com/api/guilds/${guild}/widget.json`)
.then(r=>r.json())
.then(data=>{

document.getElementById("members").innerHTML=data.presence_count+" Online";

});