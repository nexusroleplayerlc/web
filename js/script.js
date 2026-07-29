const serverID = "1277141490140840017";

fetch(`https://discord.com/api/guilds/${serverID}/widget.json`)
.then(res => res.json())
.then(data=>{

document.getElementById("members").innerHTML =
`🟢  ${data.presence_count} usuarios conectados`;

});