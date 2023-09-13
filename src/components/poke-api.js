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
          stats: data.stats,
          types:data.types
      }
  } catch (error) {
    console.error (" Error capturando el detalle", error);
    throw error;
  }
}

export async function postPokemonFavorite(pokemonId, pokemonName){
try{
       return fetch("https://64ef5185219b3e2873c44eab.mockapi.io/favoritev1/favoritos",
       {
         method:"POST",
         headers:{
         "content-type": "application/json"
         },
         body: JSON.stringify({
             idPokemon: pokemonId,
             name: pokemonName
         })
       }
       ).then((response) =>{
       if (response.ok) {
        
       }else {
        throw 'error';
       }
})
} catch (error){
    console.error("tuviste un error al llamar al api")
     return[]
    }
}

export async function getPokemonFavorite(){
  try{
         const requestPokemon= await fetch("https://64ef5185219b3e2873c44eab.mockapi.io/favoritev1/favoritos");
         const pokemonFavoritosData= await requestPokemon.json();
          return pokemonFavoritosData

  } catch (error){
      console.error("tuviste un error al llamar al api")
       return[]
      }
  }

  export async function deletePokemonesFavoritos(idP) {
    try {
        const getPokemones = await getPokemonFavorite();
        let deleteId = '';

        const verificar = getPokemones.some(({IdPokemon,id}) =>{
            if (IdPokemon == idP) {
                deleteId = id;
            }
        })

        console.log(verificar);
        return fetch(`https://64ef5185219b3e2873c44eab.mockapi.io/favoritev1/favoritos${deleteId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.ok) {
            console.log("Datos eliminados en mockupApi");
          } else {
            throw Error;
          }
        });

        // return pokemonfavoritosData;

    } catch (error) { //Se ejecuta si hubo algun error
        console.error("Hubo un error al llamar al api")
        return []
    }

}