import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleCart() {
    setInCart(!inCart);
  }

  const liClassName = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove from Cart" : "Add to Cart"
  const buttonClass = inCart ? "remove" : "add"


  return (
    <li className={liClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={(handleCart)}>{buttonText}</button>
    </li>
  );
}

export default Item;
