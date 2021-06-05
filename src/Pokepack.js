import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
        <GridList className="gridlist" cols={2} cellHeight="auto">
          <GridListTile>
            <InputLabel id="set-name-input-label">Set Name</InputLabel>
            <Select
              labelId="set-name-label-id"
              id="set-name"
            >
              <MenuItem value={"Sword and Shield"}>Sword and Shield</MenuItem>
              <MenuItem value={"Cosmic Eclipse"}>Cosmic Eclipse</MenuItem>
              <MenuItem value={"Sun and Moon"}>Sun and Moon</MenuItem>
            </Select>
          </GridListTile>
        </GridList>
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