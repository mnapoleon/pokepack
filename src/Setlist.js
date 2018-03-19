import React, { Component } from 'react';
import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';

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