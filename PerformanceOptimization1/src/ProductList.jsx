function ProductList({ products, onSelectProduct }) {
  console.log("productList rendered");
  return (
    <div>
      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name}-{product.price}
          </span>
          <button onClick={() => onSelectProduct(product)}>Select</button>
        </div>
      ))}
    </div>
  );
}
export default ProductList;
