import React, { useEffect, useState } from "react";
import { getPokemonList, postPokemonFavorite } from "../components/poke-api";
import { Await, Link } from "react-router-dom";
import Pagination from "../components/Pagination";


function Pokedex() {
  const [Pokemon, setPokemon] = useState([]);
  const [PokemonCopy, setPokemonCopy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  //indica la pagina actual
  const [page, setPage] = useState(0);
  const pokemonsLimit = 20;

  useEffect(() => {
    const fetchedPokemon = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon?Limit=${pokemonsLimit}&offset=${page*pokemonsLimit}`;
        const url2 = `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`;
        // const fetchPokemon = [];0
        const response = await getPokemonList(url);
        const response2 = await getPokemonList(url2);
        
        const data = response.array;
        const data2 = response2.array;
        console.log(response.array[0].stats[0].base_stat);
        setPokemon(data);
        setPokemonCopy(data2)
      } catch (error) {
        console.error("Error capturando Pokemon data", error);
      }
      setIsLoading(true);
    };
    fetchedPokemon();
  }, [update]);
  function searchPokemon(e) {
    let regex = new RegExp(e.target.value, "i");
    if (e.target.value !== "") {
      const filterData = PokemonCopy.filter(({ name }) => regex.test(name));
      
      setPokemon(filterData);
    } else {
      setUpdate(!update);
    }
  }
  function updatePage(e){
    //e: es valor de cada boton
    setPage(e.target.value)
    setUpdate(!update);
  }
 async function favoritePokemons(id,name){
 
  await postPokemonFavorite(id,name);
 }
{
}
  return (
    <header>

      {isLoading ? (
        <>
          <input 
            onChange={searchPokemon}
            placeholder="¿que pokemon deseas?"
            type="text"
          ></input>
          <div className="pokemon-container2">
            {Pokemon.map((pokemon) => (
              <div className="carta" key={pokemon.id} >
                <div className="numeral">N°{pokemon.id}</div>
                
               
                  <p className="nombres">{pokemon.name}</p>
                  <img className="foto2" src={pokemon.image}></img>
                  
                  <div>

                    <p className="un">HP: {pokemon.stats[0].base_stat}</p>
                    <p className="do">ATK: {pokemon.stats[1].base_stat}</p>
                    <p className="tr">DEF: {pokemon.stats[2].base_stat}</p>
                    <p className="cu">SPA: {pokemon.stats[3].base_stat}</p>
                    <p className="qui">SPD: {pokemon.stats[4].base_stat}</p>
                    <p className="se">SP: {pokemon.stats[5].base_stat}</p>

                  </div>

                  {pokemon.types.map((item, index) => (<p className="tipos" key={index}>{item.type.name}</p>))}
                  <button onClick={() => favoritePokemons(pokemon.id, pokemon.name)} className="elfav">¿favorito?</button>
                
                
              </div>
            ))};  

            <Pagination pokemonsLimit={pokemonsLimit} updatePage={updatePage} />
          </div>
        </>
      ) : (<p className="espera">Loading . . .</p>)}

    </header>
  );
  
}

export default Pokedex;
