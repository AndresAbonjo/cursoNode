const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");

const main = async () => {
  let response = await axios.get("https://rickandmortyapi.com/api/character");
  let {
    data: { results },
  } = response;

  let characters = results.map((character) => {
    return {
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
    };
  });

  let cabecera = Object.keys(characters[0]);
  let charactersArray = characters
    .map((personaje) => Object.values(personaje).join(","))
    .join("\n");

let csvReady=`${cabecera}\n${charactersArray}`
  await fs.writeFile(path.join(__dirname, "data.csv"), csvReady);

  // console.log(path.join(__dirname,'data.csv'));
  // console.log(characters);
};

main();
