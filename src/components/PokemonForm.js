import React from "react";
import { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

const [inputName, setInputName] = useState("")
const [inputHp, setInputHp] = useState("")
const [inputFrontSprite, setInputFrontSprite] = useState("")
const [inputBackSprite, setInputBackSprite] = useState("")

function handleChangeName (e) {
  setInputName(e.target.value)
  
}
function handleChangeHp (e) {
  setInputHp(e.target.value)

}
function handleChangeFrontSprite (e) {
  setInputFrontSprite(e.target.value)

}
function handleChangeBackSprite (e) {
  setInputBackSprite(e.target.value)

}

function handleSubmit(e){
  e.preventDefault()

  const newPokemon = {
      
      "name": inputName,
      "hp": inputHp,
      "sprites": {
        "front": inputFrontSprite,
        "back": inputBackSprite
      }
  }

  addNewPokemon(newPokemon)

  e.target.reset()

}



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" value ={inputName}
          onChange = {handleChangeName}/>
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value ={inputHp}
          onChange = {handleChangeHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value ={inputFrontSprite}
            onChange = {handleChangeFrontSprite}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value ={inputBackSprite}
            onChange = {handleChangeBackSprite}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
