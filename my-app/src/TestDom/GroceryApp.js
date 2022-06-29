// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
const Product = ({ name,vote, onVote }) => {
  
  console.log("Product", name, vote);
  const plus = () => {
    console.log("Product", name, vote);
     onVote(name,1);
   
    // Call props.onVote to increase the vote count for this product
  };
  const minus = () => {
    onVote(name,-1);
    // Call props.onVote to decrease the vote count for this product
  };
  return (
    <div>
    <span>{name} - {vote}</span>
          <button onClick={plus}>+</button> <button onClick={minus}>-</button>
      
    </div>
  );
};

export const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, val) => {
    // Update the products array accordingly ...
    console.log("inside onVote", dir, val);
    setProducts(
      products.map((product) => {
        if (product.name === dir) return (product.votes += val);

        return product;
      })
    );
  };

  return (
    
    <div>
      <h1>Grocerry App</h1>
      <ul>
     
      {products.map((product, index) => (

        <Product
          key={index}
          name={product.name}
          vote={product.votes}
          onVote={onVote}
        />
      ))}
      </ul>
    </div>
  );
};
