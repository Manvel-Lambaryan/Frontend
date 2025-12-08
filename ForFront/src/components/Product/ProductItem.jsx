import React from "react";

export default function ProductItem({ product, moveToCart }) {
  return (
    <div className="product-card">
      <img src={product.photo} alt={product.title} />

      <p>{product.title}</p>

      <strong>{product.price} USD</strong>

      <button onClick={() => moveToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}
