import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';

const ListItem = props => (
    <div className={props.item.done ? 'todoListItemDone' : 'todoListItem'}>
      <div className='todoListItem'><Icon onClick={() => { props.toggleDone(props.index, props.time); }} name={props.item.done ? 'check' : 'circle'} color={props.item.done ? 'green' : 'yellow'} />
      {props.item.todo}  Repeat: {props.item.repeats.map(item => `${item}, `)}
        <span style={{ float: 'right' }}>
          <Icon onClick={() => { props.onDelete(props.index, props.time); }} name='trash'/>
        </span>
      </div>
      <Divider fitted />
    </div>
);

export default ListItem;
