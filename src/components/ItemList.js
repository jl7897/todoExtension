// make list item component here, so can toggle css on click
import React from 'react';
import ListItem from './ListItem';

const ItemList = props => (
  <div className='todoList'>{props.todos.map((item, i) => (
        <ListItem
        key={i}
        index={i}
        time={props.time}
        item={item}
        onDelete={props.onDelete}
        toggleDone={props.toggleDone}/>
    ))}
    </div>
);


export default ItemList;
