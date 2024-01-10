// ProductCard.js

import React from 'react';

function ProductCard({ id, name, price }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', minWidth: '200px' }}>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
