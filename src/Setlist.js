import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Setlist extends Component {

  render() {
    return(
      <div>
        <List>
          <ListItem>
            <ListItemIcon>
              <img src="https://images.pokemontcg.io/sm4/symbol.png" />
            </ListItemIcon>
            <ListItemText
              primary="Single-line item"
              secondary='Secondary text'
            />
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Setlist