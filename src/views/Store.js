import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Store.css';

const Store = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    // Fetch the list of products from the fakeStoreApi
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const calculateTotalCost = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const canAffordShopping = () => {
    const totalCost = calculateTotalCost();
    return totalCost <= budget;
  };

  const handleBudgetChange = (event) => {
    setBudget(Number(event.target.value));
  };

  return (
    <div className="store-container">
      
        <h1>Store</h1>
        <div className="container">
        <div className="left-container">
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <p>{product.title}</p>
                <p>€{product.price}</p>
              </div>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="right-container">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>€{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total Cost: €{calculateTotalCost()}</p>

        <h2>Budget</h2>
        <input
          type="number"
          value={budget}
          onChange={handleBudgetChange}
          placeholder="Enter your budget"
        />

        <h2>Can You Afford Shopping?</h2>
        {canAffordShopping() ? (
          <p>Yes! You can afford your shopping.</p>
        ) : (
          <p>Sorry, you cannot afford your shopping.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Store;
