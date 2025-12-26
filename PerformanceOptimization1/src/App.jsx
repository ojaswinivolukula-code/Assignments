import { useCallback,useMemo, useState } from "react";
import ProductList from "./ProductList";
function App() {
  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Phone", price: 20000 },
    { id: 2, name: "Laptop", price: 50000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  const handleSelectProduct = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimiziation</h2>

      <h3>Total Price: {totalPrice}</h3>
      <button onClick={() => setCounter(counter + 1)}>Counter:{counter}</button>

      <hr />
      <ProductList products={products} onSelectProduct={handleSelectProduct} />
    </div>
  );
}
export default App;
