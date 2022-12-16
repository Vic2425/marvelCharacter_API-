
// let pokemonOne;
// let pokemonTwo;

// window.onload = () => {
//     getPokemon();
// }

// const getPokemon = (id) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//      .then(res => res.json())
//      .then(arr => {
//         pokemonOne = arr
//      });
    
// }
// getPokemon(5)


const getPokemonOne = (e) => {
    const name = document.querySelector('#pokemonName').value;
    const pokemonName = name.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
     .then(res => res.json())
     .then((data) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <div>
          <img
            src="${data.sprites.other["official-artwork"].front_default}"
            alt="Pokemon name"
          />
        </div>
        <div class="pokemonInfos">
          <h1>${capitalizeFirstLetter(data.name)}</h3>
          <p>Weight: ${data.weight}</p>
        </div>`;
     })
     .catch((err) => {
        document.querySelector(".pokemonBox").innerHTML = `
        <h4>Pokemon not found 😞</h4>
        `;
        console.log("Pokemon not found", err);
      });
  
    e.preventDefault();
}
document.querySelector("#search").addEventListener("click", getPokemonOne);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

function lowerCaseName(string) {
    return string.toLowerCase();
  }
