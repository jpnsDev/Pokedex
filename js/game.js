let allPokemons = [];
let availablePokemons = [];
let currentPokemon = "";
let score = 0;

async function fetchAllPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // Pegando os 151 primeiros Pokémon
    const data = await response.json();
    allPokemons = data.results.map(pokemon => pokemon.name);
    availablePokemons = [...allPokemons];
    loadPokemon();
}

function loadPokemon() {
    if (availablePokemons.length === 0) {
        availablePokemons = [...allPokemons]; // Resetar lista se acabar
    }

    const randomIndex = Math.floor(Math.random() * availablePokemons.length);
    currentPokemon = availablePokemons.splice(randomIndex, 1)[0];

    const img = document.getElementById("pokemonImage");
    img.style.visibility = "hidden";
    
    setTimeout(() => {
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${allPokemons.indexOf(currentPokemon) + 1}.png`;
        img.style.filter = "brightness(0)";
        img.style.visibility = "visible";
    }, 100);
}

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    if (guess === currentPokemon) {
        score++;
        document.getElementById("score").textContent = "Pontuação: " + score;
        document.getElementById("pokemonImage").style.filter = "brightness(1)";
        setTimeout(loadPokemon, 2000);
    }
}

window.onload = fetchAllPokemons;
