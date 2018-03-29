import React, { Component } from 'react';
import { Divider, Icon } from 'semantic-ui-react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render = () => (
    <div onClick={this.clicked} key={this.props.item} className={this.state.clicked ? 'todoListItemDone' : 'todoListItem'}>
      <div className='todoListItem'><Icon name={this.state.clicked ? 'check' : 'circle'} color={this.state.clicked ? 'green' : 'yellow'} />{this.props.item}</div>
      <Divider fitted />
    </div>
  )
}

export default ListItem;
