import React, { Component } from 'react';
import Pokepack from './Pokepack';
import Setlist from './Setlist';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <Setlist/>
            </td>
          </tr>
        </table>
        <Pokepack/>
      </div>
    );
  }
}

export default App;
