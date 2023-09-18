import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes
import { Provider } from 'react-redux';
import store from './src/store/index';
import './App.css';

import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import Categories from './src/Components/Categories/Categories';
import Products from './src/Components/Products/Products';
import ProductDetails from './src/Components/ProductDetails/ProductDetails';
import ShoppingCart from './src/Components/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <Router>
          <Header />
          <div className="content">
            <Categories />
            <Routes> 
              <Route path="/" element={<Products />} /> 
              <Route path="/products/:productId" element={<ProductDetails />} /> 
              <Route path="/cart" element={<ShoppingCart />} /> 
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
