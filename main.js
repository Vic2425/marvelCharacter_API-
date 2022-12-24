let pokeOne;
let pokeTwo;

window.onload = function () {
   arrPokeOne();
   arrPokeTwo();
}

const arrPokeOne = () => {
  const random1 = Math.floor(Math.random() * 905) 
  fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
   .then((res) => res.json())
   .then((array) => {
      pokeOne = array
   })
   .catch((err) => {
     document.querySelector(".pokemonOneBox").innerHTML = 
     `<h4>Pokemon not found!</h4>`;
   });
};

const arrPokeTwo = () => {
   const random2 = Math.floor(Math.random() * 905) 
    
   fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
    .then((res) => res.json())
    .then((array) => {
      pokeTwo = array
    })
    .catch((err) => {
      document.querySelector(".pokemonTwoBox").innerHTML = 
      `<h4>Pokemon not found!</h4>`;
      //console.log("Pokemon not found", err);
    });
    
};

const getPokeOne = () => {
   document.querySelector(".pokemonOneBox").innerHTML = `
      <div>
        <img
          src="${pokeOne.sprites.other["official-artwork"].front_default}"
          alt="${capFirstLetter(pokeOne.name)}" />
      </div>
      <div class="infoOne">
        <h3>${capFirstLetter(pokeOne.name)}</h3>
        <p> Id: ${pokeOne.id}</p>
        <p>Weight: ${pokeOne.weight}</p>
        <p>Base Experience: ${pokeOne.base_experience}</p>          
        <p>stat: ${pokeOne.stats[1].base_stat}</p>          
      </div>`;
};

const getPokeTwo = () => {
   document.querySelector(".pokemonTwoBox").innerHTML = `
      <div>
        <img
          src="${pokeTwo.sprites.other["official-artwork"].front_default}"
          alt="${capFirstLetter(pokeTwo.name)}" />
      </div>
      <div class="infoOne">
        <h3>${capFirstLetter(pokeTwo.name)}</h3> 
        <p> Id: ${pokeTwo.id}</p>
        <p>Weight: ${pokeTwo.weight}</p>
        <p>Base Experience: ${pokeTwo.base_experience}</p>          
        <p>stat: ${pokeTwo.stats[1].base_stat}</p>          
      </div>`;
}

function capFirstLetter(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

const battle = () => {
   const poke1Info = pokeOne.stats[1].base_stat;
   const poke2Info = pokeTwo.stats[1].base_stat;
   if (poke1Info > poke2Info) {
      document.querySelector(".result").innerHTML = 
      `<p> ${capFirstLetter(pokeOne.name)} <br> is a winner! </p>` 
   } else if (poke2Info > poke1Info) {
      document.querySelector(".result").innerHTML = 
      `<p> ${capFirstLetter(pokeTwo.name)} <br> is a winner! </p>`
   } else if (poke1Info === poke2Info) {
      document.querySelector(".result").innerHTML = 
      `<p> It\`s a tie! </p>`
   }
};

const reset = () => {
   document.querySelector(".pokemonTwoBox").innerHTML = '';
   document.querySelector(".pokemonOneBox").innerHTML = '';
   document.querySelector(".result").innerHTML = '';
   document.querySelector(".result").innerHTML = '';
   document.querySelector(".result").innerHTML = '';
   arrPokeOne() = '';
   arrPokeTwo() = '';
   
}
