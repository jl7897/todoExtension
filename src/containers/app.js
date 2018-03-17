import React, { Component } from 'react';
import { Divider, Icon, Accordion } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: '',
      week: '',
      text: '',
      activeIndex: 0,
    };
  }

  onChangeToday = (e) => {
    this.setState({ today: e.target.value });
  }

  onChangeWeek = (e) => {
    this.setState({ week: e.target.value });
  }

  onEnterToday = (e) => {
    if (e.keyCode === 13) {
      this.setState({ text: this.state.today });
    }
  }

  onEnterWeek = (e) => {
    if (e.keyCode === 13) {
      this.setState({ text: this.state.week });
    }
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render = () => {
    const { activeIndex } = this.state;
    return (
      <div>
        <h3>To do's</h3>
        <Divider/>
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Today
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <input value={this.state.today} placeholder='Type something' onChange={this.onChangeToday} onKeyDown={this.onEnterToday}/>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Week
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <input value={this.state.week} placeholder='Type something' onChange={this.onChangeWeek} onKeyDown={this.onEnterWeek} />
          </Accordion.Content>
        </Accordion>
        <p>{this.state.text}</p>
      </div>
    );
  };
}


export default App;
