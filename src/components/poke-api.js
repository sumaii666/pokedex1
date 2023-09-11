export async function getPokemonList (url) {
  var pokemonData = [];
  var result = {}
  try {
      // Consumir el api con la url recibida
      const response = await fetch(url);
      // vamos a esperar la respuesta y formatearla a json
      const data = await response.json();
      if (data.results && data.results.length){
          // iterar cata pokemon
          for (const pokemon of data.results){
              const url = pokemon.url;
              const detailPokemon = await getPokemonDetailByUrl(url);
              //push al arrelo de pokemons
              pokemonData.push(detailPokemon);
          }
      }
      result ={count:data.count,
          next:data.next,
          previous: data.previous,
          array: pokemonData};

  } catch (error) {
      console.error (" Error capturando la Pokemon data", error);
      return null;
  }
  return result;
}

async function getPokemonDetailByUrl(url) {
  try {
      // obtener el detalle de cada pokemon
      const response = await fetch(url);
      const data = await response.json();
      const id = data.id;
      return {
          id,
          name:data.name,
          image:data.sprites.other["official-artwork"]["front_default"],
      }
  } catch (error) {
    console.error (" Error capturando el detalle", error);
    throw error;
  }
}
