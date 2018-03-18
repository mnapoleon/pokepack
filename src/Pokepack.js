import React, { Component } from 'react';
import GridList from 'material-ui/GridList';
import Pokecard from './Pokecard';

import './Pokepack.css';

const pokemon = require('pokemontcgsdk')

class Pokepack extends Component {

  constructor() {
    super()
    this.state = {
      pack: []
    }
  }

  componentDidMount() {
    let pack = []
    pokemon.card.where({ supertype: 'pokemon', set: 'Crimson Invasion' })
      .then(cards => {
        let size = cards.length
        let i=0
        while (i < 15) {
          let ranNum = Math.floor(Math.random() * size)
          pack.push(cards[ranNum])
          i++
        } 
        this.setState({pack: pack})
    })
  }

  render() {
    this.state.pack.map((card, index) => (console.log(card.imageUrl)))
    return (
      <div className="root">
        <GridList className="gridlist">
          {this.state.pack.map((card, index) => (
            <Pokecard imageCardSrc={card.imageUrl}/>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Pokepack