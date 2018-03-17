import React, { Component } from 'react';
import { Divider, Icon, Accordion, Input } from 'semantic-ui-react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      today: '',
      week: '',
      month: '',
      todayTodos: [],
      weekTodos: [],
      monthTodos: [],
      activeIndex: 0,
    };
  }

  onChange = (e, time) => {
    this.setState({ [time]: e.target.value });
  }

  onEnter = (e, time) => {
    if (e.keyCode === 13) {
      const todos = `${time}Todos`;
      this.setState({
        [time]: '',
        [todos]: [...this.state[todos], this.state[time]],
      });
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
            <Input
            icon='add to calendar'
            label='Todo:'
            size='mini'
            value={this.state.today}
            placeholder='Add a todo!'
            onChange={(e) => { this.onChange(e, 'today'); }}
            onKeyDown={(e) => { this.onEnter(e, 'today'); }}/>
            <div className='todoList'>{this.state.todayTodos.map(item => (
              <div className='todoListItem'>
                <div className='todoListItem'><Icon name='circle' color='yellow'/>{item}</div>
                <Divider fitted/>
              </div>
            ))}
            </div>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Week
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Input
            icon='add to calendar'
            label='Todo:'
            size='mini'
            value={this.state.week}
            placeholder='Add a todo!'
            onChange={(e) => { this.onChange(e, 'week'); }}
            onKeyDown={(e) => { this.onEnter(e, 'week'); }}/>
            <div className='todoList'>{this.state.weekTodos.map(item => (
              <div className='todoListItem'>
                <div className='todoListItem'><Icon name='circle' color='yellow' />{item}</div>
                <Divider fitted />
              </div>
            ))}
            </div>
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='plus square outline' />
            Month
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Input
            icon='add to calendar'
            label='Todo:'
            size='mini'
            value={this.state.month}
            placeholder='Add a todo!'
            onChange={(e) => { this.onChange(e, 'month'); }}
            onKeyDown={(e) => { this.onEnter(e, 'month'); }}/>
            <div className='todoList'>{this.state.monthTodos.map(item => (
              <div className='todoListItem'>
                <div className='todoListItem'><Icon name='circle' color='yellow' />{item}</div>
                <Divider fitted />
              </div>
            ))}
            </div>
          </Accordion.Content>
        </Accordion>
        <p>{this.state.text}</p>
      </div>
    );
  };
}


export default App;
