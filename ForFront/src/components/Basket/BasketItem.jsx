import React from "react";

export default function BasketItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <tr>
      <td>{item.title}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>

      <td className="basket-actions">
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <button onClick={() => removeItem(item.id)}>X</button>
      </td>
    </tr>
  );
}
