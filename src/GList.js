import React from 'react';
import Grocery from './Grocery';

const List = (props) => (
  <div>
    <h1>{props.name}</h1>
    <ul>
      {props.groceries.map(g => <Grocery key={g.id} {...g} grocClick={props.grocClick} />) }
    </ul>
  </div>
);

export default List;