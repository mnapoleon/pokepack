import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import './Pokecard.css';

const pokemon = require('pokemontcgsdk')

class Pokecard extends Component {

  constructor() {
    super()
    this.state = {
      isFlipped: true,
      imageCardSrc: '' 
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.reloadCard()
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.isFlipped) {
      this.reloadCard()
    }
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  reloadCard() {
    pokemon.card.where({ supertype: 'pokemon', set: 'Crimson Invasion' })
      .then(cards => {
        let size = cards.length
        let ranNum = Math.floor(Math.random() * size)
        this.setState ({imageCardSrc: cards[ranNum].imageUrl})
        console.log(this.state)
    })
  }

  render() {
    return (
        <div className="card">
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div key="front">
              <img src={this.state.imageCardSrc}
              onClick={this.handleClick}>
              </img>
            </div>

            <div key="back">
              <img src='https://pre00.deviantart.net/cb44/th/pre/i/2016/259/5/a/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg-dah43cy.png' 
                height='342' width='245'
                onClick={this.handleClick}>
              </img>
            </div>
          </ReactCardFlip>
        </div>
    );
  }
}

export default Pokecard