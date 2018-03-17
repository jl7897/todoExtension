import React, { Component } from 'react';
import { Divider, Icon, Accordion, Input } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: '',
      week: '',
      month: '',
      text: '',
      activeIndex: null,
    };
  }

  onChange = (e, time) => {
    this.setState({ [time]: e.target.value });
  }

  onEnter = (e, time) => {
    if (e.keyCode === 13) {
      this.setState({ text: this.state[time] });
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
            <Input focus value={this.state.today} placeholder='Add a todo!' onChange={(e) => { this.onChange(e, 'today'); }} onKeyDown={(e) => { this.onEnter(e, 'today'); }}/>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Week
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Input focus value={this.state.week} placeholder='Add a todo!' onChange={(e) => { this.onChange(e, 'week'); }} onKeyDown={(e) => { this.onEnter(e, 'week'); }}/>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Month
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Input focus value={this.state.month} placeholder='Add a todo!' onChange={(e) => { this.onChange(e, 'month'); }} onKeyDown={(e) => { this.onEnter(e, 'month'); }}/>
          </Accordion.Content>
        </Accordion>
        <p>{this.state.text}</p>
      </div>
    );
  };
}


export default App;
