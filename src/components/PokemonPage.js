import React, { useEffect } from "react";
import { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")

useEffect (() => {

  fetch(" http://localhost:3001/pokemon")
  .then(res => res.json())
  .then(data => setPokemonList(data))

}, [])  

function addNewPokemon(pokemon) {
  fetch(" http://localhost:3001/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(pokemon)
  })
  .then(res => res.json())
  .then(poke => setPokemonList([...pokemonList, poke]))
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} setSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonList = {pokemonList} search={search}/>
    </Container>
  );
}

export default PokemonPage;
