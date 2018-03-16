import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      text: '',
    };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }

  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        value: '',
        text: this.state.value,
      });
    }
  }

  render = () => (
    <div>
      <input value={this.state.value} placeholder='Type something' onChange={this.onChange} onKeyDown={this.onEnter}/>
      <p>{this.state.text}</p>
    </div>
  );
}


export default App;
