import { useState } from "react";
import "./App.css";

import ProductList from "./components/Product/ProductList";
import Basket from "./components/Basket/Basket";

export default function App() {
  const [products] = useState([
    { id: 101, title: "Psychology", price: 28, photo: "https://images.booksense.com/images/568/458/9781465458568.jpg" },
    { id: 102, title: "Philosophy", price: 42.4, photo: "https://gutterbookshop.com/wp-content/uploads/2024/01/dk-philosophy.jpg" },
    { id: 103, title: "Biology", price: 12.8, photo: "https://dk.com/cdn/shop/files/getfile_047b7a4f-d19d-4cad-a78e-147f2955f0b2.jpg?v=1759829664" },
    { id: 104, title: "History", price: 17, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNIMwvtW-vSkyF-vPwlO9XtjJ-IJ2doggOQ&s" },
    { id: 105, title: "Math", price: 88, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFUcJZYM00y1ySj5EeZ-yA8RRujPvJqY-dw&s" },
  ]);

  const [basket, setBasket] = useState([]);

  const moveToCart = (product) => {
    const exists = basket.find((item) => item.id === product.id);

    if (exists) {
      setBasket(
        basket.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setBasket(
      basket.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setBasket(
      basket
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <div className="left">
        <h2>Shop</h2>

        <ProductList products={products} moveToCart={moveToCart} />
      </div>

      <div className="right">
        <Basket
          basket={basket}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      </div>
    </div>
  );
}
