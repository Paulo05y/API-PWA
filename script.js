async function searchMusic(){

const query = document.getElementById("searchInput").value

if(!query) return

if(navigator.vibrate){
    navigator.vibrate(100)
}

const url = `https://api.deezer.com/search?q=${query}`

const response = await fetch(`https://corsproxy.io/?${url}`)
const data = await response.json()

displayResults(data.data)

}

function displayResults(musicList){

const results = document.getElementById("results")

results.innerHTML = ""

musicList.forEach(music => {

const card = document.createElement("div")
card.classList.add("card")

card.innerHTML = `
<img src="${music.album.cover_medium}">
<div class="info">
<h3>${music.title}</h3>
<p>${music.artist.name}</p>
<audio controls src="${music.preview}"></audio>
</div>
`

results.appendChild(card)

})

}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js")
}