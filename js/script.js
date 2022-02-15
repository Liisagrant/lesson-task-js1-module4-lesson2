const url = "https://breakingbadapi.com/api/characters/6";
const container = document.querySelector(".details");

async function getPerson () {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const details = result[0];
        fixHtml(details);
    } catch (error){
        console.log(error);
        container.innerHTML = error;
    }
}
getPerson();

function fixHtml (details) {
    container.innerHTML = ` 
    <h1 class="name">Name: ${details.name}</h1>
    <div class="image" style="background-image: url('${details.img}')"></div>
    <div class="status">Status: <b>${details.status}</b></div>
    `;
}