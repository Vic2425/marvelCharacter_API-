
// window.onload = () => {
//     getPokemon();
// }

const getPokemonOne = (e) => {
  const pokeId = document.querySelector('#pokeOneId').value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
   .then(res => res.json())
   .then((data1) => {
      document.querySelector(".pokemonOneBox").innerHTML = `
      <div>
        <img
          src="${data1.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name" />
      </div>
      <div class="infoOne">
        <h1>${capFirstLetter(data1.name)}</h3>
        <p>Weight: ${data1.weight}</p>
        <p>Base Experience: ${data1.base_experience}</p>          
        <p>stat: ${data1.stats[1].base_stat}</p>          
      </div>`;
   })
   .catch((err) => {
      document.querySelector(".pokemonOneBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });
  e.preventDefault();
}
document.querySelector("#searchOne").addEventListener("click", getPokemonOne);


const getPokemonTwo = (e) => {
  const pokeId = document.querySelector('#pokeTwoId').value;

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
   .then(res => res.json())
   .then((data2) => {
      document.querySelector(".pokemonTwoBox").innerHTML = `
      <div>
        <img
          src="${data2.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name" />
      </div>
      <div class="infoTwo">
        <h1>${capFirstLetter(data2.name)}</h3>
        <p>Weight: ${data2.weight}</p>
        <p>Base Experience: ${data2.base_experience}</p>          
        <p>stat: ${data2.stats[1].base_stat}</p>          
      </div>`;
   })
   .catch((err) => {
      document.querySelector(".pokemonTwoBox").innerHTML = `
      <h4>Pokemon not found 😞</h4>
      `;
      console.log("Pokemon not found", err);
    });
  e.preventDefault();
}
document.querySelector("#searchTwo").addEventListener("click", getPokemonTwo);

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const pokeBattle = () => {
let stat1 = `${data1.stats[1].base_stat}`
let stat2 = `${data2.stats[1].base_stat}`
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
   if(stat1 > stat2) {
     console.log('PokeOne is a winner!')
   } else if(stat1 < stat2) {
       console.log('PokeTwo is a winner!')
   } else if( stat1 = stat2) {
     console.log('It\'s a tie!')
   }
})
}

