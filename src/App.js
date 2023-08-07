import React from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import Home from './pages/Home';
import Pagination from './components/Pagination';
import LoginPage from './pages/LoginPage'
import * as ReactDOM from "react-dom/client";
import SignUpPage from './pages/SignUpPage';
import Cart from './pages/Cart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/signup",
    element: <SignUpPage/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },

]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
