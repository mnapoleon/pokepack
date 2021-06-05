import React, { Component } from 'react';
import Pokepack from './Pokepack';
import Setlist from './Setlist';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <Setlist/>
              </td>
            </tr>
          </tbody>
        </table>
        <Pokepack/>
      </div>
    );
  }
}

export default App;
