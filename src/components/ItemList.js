// make list item component here, so can toggle css on click
import React from 'react';
import ListItem from './ListItem';

const ItemList = props => (
  <div className='todoList'>{props.todos.map(item => (
        <ListItem item={item}/>
    ))}
    </div>
);


export default ItemList;
