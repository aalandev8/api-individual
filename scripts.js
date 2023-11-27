function getCharacters(ready) {
    const results = fetch("https://rickandmortyapi.com/api/character/");

    results
        .then(response => response.json())
        .then(data => {
            ready(data.results); 
        })
        .catch(error => {
            console.error('Error fetching characters:', error);
        });
}

getCharacters(data => {
    data.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/`
        <article>
        <div class="image-container">
          <img src="${personaje.image}" alt="character">
        </div>
        <h2>${personaje.name}</h2>
        <span>${personaje.status}</span>
      </article>
        `);

        const mainm = document.querySelector("main"); // Fix the typo in 'querySelector'
        mainm.append(article);
    });
});
