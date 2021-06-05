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
      commons: [],
      uncommons: [],
      rare: [],
      selectedSet: 'Crimson Invasion'
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  pickRareType() {
    let rareTypes = ['Rare','Rare Holo','Rare Holo GX','Rare Ultra','Rare Secret']
    var randomNumber = this.getRandomInt(1,100)
    console.log("Random number is.." + randomNumber)
    if (randomNumber >= 1 && randomNumber <= 30) {
      console.log("Rare type is..." + rareTypes[0])
      return rareTypes[0]
    }
    if (randomNumber >= 31 && randomNumber <= 50) {
      console.log("Rare type is..." + rareTypes[1])
      return rareTypes[1]
    }
    if (randomNumber >= 51 && randomNumber <= 70) {
      console.log("Rare type is..." + rareTypes[2])
      return rareTypes[2]
    }
    if (randomNumber >= 71 && randomNumber <= 90) {
      console.log("Rare type is..." + rareTypes[3])
      return rareTypes[3]
    }
    if (randomNumber >= 91 && randomNumber <= 100) {
      console.log("Rare type is..." + rareTypes[4])
      return rareTypes[4]
    }
  }

  componentDidMount() {
    let commons = []
    let uncommons = []
    let rare = []
    pokemon.card.where({ supertype: 'pokemon', set: this.state.selectedSet, rarity: "Common" })
      .then(cards => {
        let size = cards.length
        let i=0
        while (i < 6) {
          let ranNum = Math.floor(Math.random() * size)
          commons.push(cards[ranNum])
          i++
        }
        this.setState({commons: commons})
    })
    pokemon.card.where({ supertype: 'pokemon', set: this.state.selectedSet, rarity: "Uncommon" })
      .then(cards => {
        let size = cards.length
        let i=0
        while (i < 3) {
          let ranNum = Math.floor(Math.random() * size)
          uncommons.push(cards[ranNum])
          i++
        }
        this.setState({uncommons: uncommons})
    })
    pokemon.card.where({ supertype: 'pokemon', set: this.state.selectedSet, rarity: this.pickRareType()})
    .then(cards => {
      let size = cards.length
      let i=0
      while (i < 1) {
        let ranNum = Math.floor(Math.random() * size)
        rare.push(cards[ranNum])
        i++
      }
      this.setState({rare: rare})
  })
  }

  render() {
    return (
      <div className="root">
        <GridList className="gridlist" cols={2} cellHeight="auto">
          <GridListTile>
            <InputLabel id="set-name-input-label">Set Name</InputLabel>
            <Select
              labelId="set-name-label-id"
              id="set-name"
              value={this.state.selectedSet}
            >
              <MenuItem value={"Sword and Shield"}>Sword and Shield</MenuItem>
              <MenuItem value={"Crimson Invasion"}>Cosmic Eclipse</MenuItem>
              <MenuItem value={"Sun and Moon"}>Sun and Moon</MenuItem>
            </Select>
          </GridListTile>
        </GridList>
        <GridList className="gridlist" cols={5} cellHeight="auto">
          {this.state.commons.map((card, index) => (
            <GridListTile>
              <Pokecard imageCardSrc={card.imageUrl} rarity="Common"/>
            </GridListTile>
          ))}
          {this.state.uncommons.map((card, index) => (
            <GridListTile>
              <Pokecard imageCardSrc={card.imageUrl} rarity="Uncommon"/>
            </GridListTile>
          ))}{this.state.rare.map((card, index) => (
            <GridListTile>
              <Pokecard imageCardSrc={card.imageUrl} rarity="Rare"/>
            </GridListTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default Pokepack