import ProductItem from "./ProductItem";

export default function ProductList({ products, moveToCart }) {
  return (
    <div className="product-list-container">
      <h3>Products:</h3>

      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            moveToCart={moveToCart}
          />
        ))}
      </div>
    </div>
  );
}
