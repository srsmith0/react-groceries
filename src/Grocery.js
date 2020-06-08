import React from 'react';

const Grocery = ({ name, id, inCart, grocClick }) => (
  <li
    style= { inCart ?{ ...styles.grocery, ...styles.inCart} : styles.grocery }
    onClick ={ () => grocClick(id) }
    >
      {name}
    </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  inCart: {color: 'red', textDecoration: 'line-through' },
};

export default Grocery; 