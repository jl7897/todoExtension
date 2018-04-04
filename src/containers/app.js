import React, { Component } from 'react';
import { Divider, Icon, Accordion, Input } from 'semantic-ui-react';
import ItemList from '../components/ItemList';

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
      activeIndexToday: 0,
      activeIndexWeek: null,
      activeIndexMonth: null,
    };
  }

  onChange = (e, time) => {
    this.setState({ [time]: e.target.value });
  }

  onEnter = (e, time) => {
    if (e.keyCode === 13) {
      const todos = `${time}Todos`;
      const newItem = {
        todo: this.state[time],
        done: false,
      };
      this.setState({
        [time]: '',
        [todos]: [...this.state[todos], newItem],
      });
    }
  }

  toggleDone = (index, time) => {
    const todos = `${time}Todos`;
    const newState = [...this.state[todos]];
    newState[index].done = !newState[index].done;
    this.setState({ [todos]: newState });
  }

  onDelete = (index, time) => {
    const todos = `${time}Todos`;
    const newState = [...this.state[todos]];
    newState.splice(index, 1);
    this.setState({ [todos]: newState });
  }

  handleClickToday = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndexToday } = this.state;
    const newIndex = activeIndexToday === index ? -1 : index;

    this.setState({ activeIndexToday: newIndex });
  }

  handleClickWeek = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndexWeek } = this.state;
    const newIndex = activeIndexWeek === index ? -1 : index;

    this.setState({ activeIndexWeek: newIndex });
  }

  handleClickMonth = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndexMonth } = this.state;
    const newIndex = activeIndexMonth === index ? -1 : index;

    this.setState({ activeIndexMonth: newIndex });
  }

  render = () => {
    const { activeIndexToday, activeIndexWeek, activeIndexMonth } = this.state;
    return (
      <div>
        <h3>To do's</h3>
        <Divider/>
        <Accordion styled className='accordian'>
          <Accordion.Title
          active={activeIndexToday === 0}
          index={0}
          onClick={this.handleClickToday}>
            <Icon name='plus square outline' />
            Today
          </Accordion.Title>
          <Accordion.Content active={activeIndexToday === 0}>
            <Input
            icon='add to calendar'
            label='Todo:'
            size='mini'
            value={this.state.today}
            placeholder='Add a todo for today!'
            onChange={(e) => { this.onChange(e, 'today'); }}
            onKeyDown={(e) => { this.onEnter(e, 'today'); }}/>
            <ItemList time={'today'} todos={this.state.todayTodos} onDelete={this.onDelete} toggleDone={this.toggleDone}/>
          </Accordion.Content>
        </Accordion>
        <Accordion styled className='accordian'>
          <Accordion.Title
          active={activeIndexWeek === 0}
          index={0}
          onClick={this.handleClickWeek}>
            <Icon name='plus square outline' />
            Week
          </Accordion.Title>
          <Accordion.Content active={activeIndexWeek === 0}>
            <Input
              icon='add to calendar'
              label='Todo:'
              size='mini'
              value={this.state.week}
              placeholder='Add a todo for this week!'
              onChange={(e) => { this.onChange(e, 'week'); }}
              onKeyDown={(e) => { this.onEnter(e, 'week'); }} />
            <ItemList time={'week'} todos={this.state.weekTodos} onDelete={this.onDelete} toggleDone={this.toggleDone}/>
          </Accordion.Content>
        </Accordion>
        <Accordion styled className='accordian'>
          <Accordion.Title
          active={activeIndexMonth === 0}
          index={0}
          onClick={this.handleClickMonth}>
            <Icon name='plus square outline' />
            Month
          </Accordion.Title>
          <Accordion.Content active={activeIndexMonth === 0}>
            <Input
              icon='add to calendar'
              label='Todo:'
              size='mini'
              value={this.state.month}
              placeholder='Add a todo for this month!'
              onChange={(e) => { this.onChange(e, 'month'); }}
              onKeyDown={(e) => { this.onEnter(e, 'month'); }} />
            <ItemList time={'month'} todos={this.state.monthTodos} onDelete={this.onDelete} toggleDone={this.toggleDone}/>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  };
}


export default App;
