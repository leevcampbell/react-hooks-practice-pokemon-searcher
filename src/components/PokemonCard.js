import React from "react";
import { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({poke}) {

const [isFlipped, setIsFlipped] = useState(false)
const pokeImage = isFlipped ? poke.sprites.back : poke.sprites.front

const handleClick = () => {
  setIsFlipped(!isFlipped)

}


  return (
    <Card onClick = {handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!"  src={pokeImage}/>
        </div>
        <div className="content">
          <div className="header">{poke.name} </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
