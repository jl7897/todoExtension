import React from 'react';
import { Divider, Icon, Popup, Button } from 'semantic-ui-react';

const ListItem = props => (
    <div className={props.item.done ? 'todoListItemDone' : 'todoListItem'}>
      <div className='todoListItem'>
      <Icon onClick={() => { props.toggleDone(props.index, props.time); }} name={props.item.done ? 'check' : 'circle'} color={props.item.done ? 'green' : 'yellow'} />
        {props.item.todo}
        <span style={{
          float: 'right',
          marginLeft: '1%',
          }}>
          <Popup
            hoverable
            trigger={<Icon name='trash' />}
            content={<Button onClick={() => { props.onDelete(props.index, props.time); }} color='red' content='Really delete?' />}
            on='hover'
            position='top left'
          />
        </span>
        {
          // put this in the details body instead
        }
        <span style={{
          float: 'right',
          marginRight: '5%',
        }}>
          {props.item.repeats.map((item, i) => <span key={i} className='daysRepeated'>{item}</span>)}
        </span>
      </div>
      <Divider fitted />
    </div>
);

export default ListItem;
