const songs = [
    { title: "Bohemian Rhapsody", genre: "rock", lang: "en" },
    { title: "Billie Jean", genre: "pop", lang: "en" },
    { title: "Dákiti", genre: "latin", lang: "es" },
    { title: "As It Was", genre: "pop", lang: "en" },
    { title: "Guren no Yumiya", genre: "anime", lang: "jp" },
    { title: "Despacito", genre: "latin", lang: "es" },
    { title: "Un Beso", genre: "latin", lang: "es" },
    { title: "Blue Bird", genre: "anime", lang: "jp" }
];

function renderSongs() {
    const genre = document.getElementById("genreFilter").value;
    const lang = document.getElementById("langFilter").value;

    const list = document.getElementById("songList");
    list.innerHTML = "";

    songs
        .filter(s => (genre === "all" || s.genre === genre) &&
                      (lang === "all" || s.lang === lang))
        .forEach(song => {
            const card = document.createElement("div");
            card.className = "song-card";

            card.innerHTML = `
                <div class="song-title">${song.title}</div>
                <div class="song-meta">Género: ${song.genre} | Idioma: ${song.lang}</div>
            `;

            list.appendChild(card);
        });
}

document.getElementById("genreFilter").onchange = renderSongs;
document.getElementById("langFilter").onchange = renderSongs;

renderSongs();
