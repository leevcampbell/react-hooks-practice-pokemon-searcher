import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemonList, search} ) {


  const filteredPokemon = pokemonList.filter(poke => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })

const pokemonDisplay = filteredPokemon.map(poke => {
  return <PokemonCard key={poke.id} poke = {poke} />
})

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
