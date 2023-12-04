import React from "react";
import "./App.css";
import { ProductList } from "./components/product";
import { Cart } from "./components/cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList />
        <Cart />
      </header>
    </div>
  );
}

export default App;
