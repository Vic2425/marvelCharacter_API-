let pokeOne;
let pokeTwo;

window.onload = function () {
   arrPokeOne();
   arrPokeTwo();
}

const arrPokeOne = () => {
  const random1 = Math.floor(Math.random() * 150) 
  fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
   .then((res) => res.json())
   .then((array) => {
      pokeOne = array
   });
   //console.log(random1)
};

const arrPokeTwo = () => {
   const random2 = Math.floor(Math.random() * 150) 
    
   fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
    .then((res) => res.json())
    .then((array) => {
      pokeTwo = array
   });
  // console.log(random2)
 };

const getPokeOne = () => {
   document.querySelector(".pokemonOneBox").innerHTML = `
      <div>
        <img
          src="${pokeOne.sprites.other["official-artwork"].front_default}"
          alt="${capFirstLetter(pokeOne.name)}" />
      </div>
      <div class="infoOne">
        <h1>${capFirstLetter(pokeOne.name)}</h3>
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
        <h1>${capFirstLetter(pokeTwo.name)}</h3>
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
      `<p> ${capFirstLetter(pokeOne.name)} is a winner! </p>` 
   } else if (poke2Info > poke1Info) {
      document.querySelector(".result").innerHTMLL = 
      `<p> ${capFirstLetter(pokeTwo.name)} is a winner! </p>`
   } else if (poke1Info === poke2Info) {
      document.querySelector(".result").innerHTML = 
      `<p> It\`s a tie! </p>`
   }
}

// let data1;
// let data2;

// // window.onload = () => {
// //     getPokemon();
// // }

// const getPokemonOne = (e) => {
//   const pokeId1 = document.querySelector('#pokeOneId').value;

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId1}`)
//    .then(res => res.json())
//    .then((data1) => {
//       document.querySelector(".pokemonOneBox").innerHTML = `
//       <div>
//         <img
//           src="${data1.sprites.other["official-artwork"].front_default}"
//           alt="${capFirstLetter(data1.name)}" />
//       </div>
//       <div class="infoOne">
//         <h1>${capFirstLetter(data1.name)}</h3>
//         <p>Weight: ${data1.weight}</p>
//         <p>Base Experience: ${data1.base_experience}</p>          
//         <p>stat: ${data1.stats[1].base_stat}</p>          
//       </div>`;
//    })
//    .catch((err) => {
//       document.querySelector(".pokemonOneBox").innerHTML = `
//       <h4>Pokemon not found!</h4>
//       `;
//       console.log("Pokemon not found", err);
//     });
//   e.preventDefault();
// }
// document.querySelector("#searchOne").addEventListener("click", getPokemonOne);

// const getPokemonTwo = (e) => {
//   const pokeId2 = document.querySelector('#pokeTwoId').value;
//   let arr1 = '';

//   fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId2}`)
//    .then(res => res.json())
//    .then((data2) => {
//       document.querySelector(".pokemonTwoBox").innerHTML = `
//       <div>
//         <img
//           src="${data2.sprites.other["official-artwork"].front_default}"
//           alt="${capFirstLetter(data2.name)}" />
//       </div>
//       <div class="infoTwo">
//         <h1>${capFirstLetter(data2.name)}</h3>
//         <p>Weight: ${data2.weight}</p>
//         <p>Base Experience: ${data2.base_experience}</p>          
//         <p>stat: ${data2.stats[1].base_stat}</p>          
//       </div>`;     
    
//    })
//    .catch((err) => {
//       document.querySelector(".pokemonTwoBox").innerHTML = `
//       <h4>Pokemon not found!</h4>
//       `;
//       console.log("Pokemon not found", err);
//     });
//   e.preventDefault();
// }
// document.querySelector("#searchTwo").addEventListener("click", getPokemonTwo);

// function capFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };

// const pokeBattle = () => {
//   const btn = document.getElementById('btn');
//   btn.addEventListener('click', () => {
//   const pokeOne = data1.stats[0].base_stat;
//   const pokeTwo = data2.stats[0].base_stat;
//   if(pokeOne > pokeTwo) {
//     alert `Poke One is a winner!`
//   } else if(pokeOne < pokeTwo){
//     alert `Poke two is a winner!`
//   } else if(pokeOne == pokeTwo) {
//     alert `It\'s a tie!`
//   }
 
// })
// }
// pokeBattle()