import React from "react";
import "./App.css";
import ProductList from "../ProductList";
import Cart from "../Cart";

const App = () => (
  <div className="container">
    <h1>Shopping Cart</h1>
    <ProductList />
    <hr />
    <Cart />
  </div>
);
export default App;
