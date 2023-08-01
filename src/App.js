import { useEffect, useReducer, useState } from "react";
import { cartReducer } from "./reducer/cartReducer";
import "./App.css";

function App() {
  const products = [];
  const [state, dispatch] = useReducer(cartReducer, products);

  const fetchApi = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const result = await data.json();
    dispatch({ type: "ADD_PRODUCTS", payload: result.products });
  };

  console.log(state.products);
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="App">
      {state.products.map((item) => {
        return (
          <div>{item.brand}</div>
          );
      })}
    </div>
  );
}

export default App;
