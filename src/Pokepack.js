import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
        <GridList className="gridlist" cols={5} cellHeight="auto">
          {this.state.pack.map((card, index) => (
            <GridListTile>
              <Pokecard imageCardSrc={card.imageUrl}/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Pokepack