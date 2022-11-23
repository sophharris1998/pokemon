import { pokemonArray } from "./data/pokemon.js";

const mainContent = document.querySelector(".card-container");

const renderCard = (pokemon) => {
  let htmlString = "";

  pokemonArray.forEach((pokemon) => {
    console.log(pokemon);
    htmlString += ` 
    <section>
      <img> src="${pokemon.sprite}"</img>
    </section>
    `;
  });

  mainContent.innerHTML = htmlString;
};

renderCard(pokemonArray);
