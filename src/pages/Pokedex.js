import React, { useEffect, useState } from "react";
import { getPokemonList } from "../components/poke-api";
import { Link } from "react-router-dom";
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
        // const fetchPokemon = [];
        const response = await getPokemonList(url);

        const data = response.array;
        console.log(data);
        setPokemon(data);

        //Prueba
        //const url2 = "https://pokeapi.co/api/v2/pokemon/?limit=500&offset=0";
        // const fetchPokemon = [];
        //const response2 = await getPokemonList(url2);

        //const data2 = response2.array;

        setPokemonCopy(data);
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
      console.log(filterData);
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

  return (
    <header>
      {isLoading ? (
        <>
          <input
            onChange={searchPokemon}
            placeholder="Search pokemon"
            type="text"
          ></input>
          <div className="pokemon-container2">
            {Pokemon.map((pokemon) => (
              <div className="carta" key={pokemon.id} >
                <div>N°{pokemon.id}</div>
                
                <Link to={`/PageEvolutions/${pokemon.id}`}>
                  <p className="name">{pokemon.name}</p>
                  <img className="foto2" src={pokemon.image}></img>
                </Link>
              </div>
            ))}

            <Pagination pokemonsLimit={pokemonsLimit} updatePage={updatePage} />
          </div>
        </>
      ) : (
        <div class="socket">
          <div class="gel center-gel">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c1 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c2 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c3 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c4 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c5 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c6 r1">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>

          <div class="gel c7 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>

          <div class="gel c8 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c9 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c10 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c11 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c12 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c13 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c14 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c15 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c16 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c17 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c18 r2">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c19 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c20 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c21 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c22 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c23 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c24 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c25 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c26 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c28 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c29 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c30 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c31 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c32 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c33 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c34 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c35 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c36 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
          <div class="gel c37 r3">
            <div class="hex-brick h1"></div>
            <div class="hex-brick h2"></div>
            <div class="hex-brick h3"></div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Pokedex;
