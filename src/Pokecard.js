import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

import './Pokecard.css';

const pokemon = require('pokemontcgsdk')

class Pokecard extends Component {

  constructor() {
    super()
    this.state = {
      isFlipped: true
    };
    this.handleClick = this.handleClick.bind(this)
  }

  //componentDidMount() {
  //  this.reloadCard()
  //}

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  // reloadCard() {
  //   pokemon.card.where({ supertype: 'pokemon', set: 'Crimson Invasion' })
  //     .then(cards => {
  //       let size = cards.length
  //       let ranNum = Math.floor(Math.random() * size)
  //       this.setState ({imageCardSrc: cards[ranNum].imageUrl})
  //       console.log(this.state)
  //   })
  // }

  render() {
    return (
        <div className="card">
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <div key="front">
              <img src={this.props.imageCardSrc}
              onClick={this.handleClick} height='275' width='196'>
              </img>
            </div>

            <div key="back">
              <img src='https://pre00.deviantart.net/cb44/th/pre/i/2016/259/5/a/pokemon_card_backside_in_high_resolution_by_atomicmonkeytcg-dah43cy.png' 
                height='275' width='196'
                onClick={this.handleClick}>
              </img>
            </div>
          </ReactCardFlip>
          <div><b>{this.props.rarity}</b></div>
        </div>
    );
  }
}

export default Pokecard