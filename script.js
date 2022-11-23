import { pokemonArray } from "./data/pokemon.js";

const mainContent = document.querySelector(".card-container");

const renderCard = (pokemonArray) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    console.log(pokemon);
    htmlString += ` 
    <section>
    <img src="${pokemon.sprite}" >
      <h1> ${pokemon.name} </h1>
      <p> ${pokemon.types} </p>
    </section>
    `;
  });

  mainContent.innerHTML = htmlString;
};

renderCard(pokemonArray);

//const changeCard = () => {
// const changeCardS = document.querySelector("card-container");
//changeCardS.background - color("$color-foreground");
//};
