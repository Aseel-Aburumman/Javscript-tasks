function fetchPokemon() {
  const pokemonNameOrId = document
    .getElementById("pokemonInput")
    .value.toLowerCase();
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      return response.json();
    })
    .then((data) => {
      displayPokemonData(data);
    })
    .catch((error) => {
      displayError(error.message);
    });
}

function displayPokemonData(data) {
  const pokemonInfo = document.getElementById("pokemonInfo");
  pokemonInfo.innerHTML = `
        <h2>${capitalize(data.name)}</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>ID:</strong> ${data.id}</p>
    `;
}

function displayError(message) {
  const pokemonInfo = document.getElementById("pokemonInfo");
  pokemonInfo.innerHTML = `<p style="color: red;">${message}</p>`;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
