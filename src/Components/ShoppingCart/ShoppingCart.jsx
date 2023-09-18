// ShoppingCart.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/carts';
import { increaseInventory } from '../../store/productSlice';
import DeleteOutlinedIcon from '@mui/icons-material/Delete';
import './ShoppingCart.css';

function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    dispatch(increaseInventory(itemId));
  };

  const [formData, setFormData] = useState({
    shippingAddress: '',
    billingAddress: '',
    creditCard: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your purchase');
  };

  return (
    <div className="shopping-cart-container">
    <h2>Shopping Cart</h2>
    <ul className="cart-items-list">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <li className="cart-item" key={item.id}>
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-price">Price per piece: ${item.price.toFixed(2)}</span>
            <span className="cart-item-quantity">
              Quantity: {item.quantity}
              <button
                className="cart-item-remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                <DeleteOutlinedIcon />
              </button>
            </span>
          </li>
        ))
      ) : (
        <li>Your cart is empty</li>
      )}
    </ul>
    <div className="total-price">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
      </div>


    <div className="shipping-payment-form">
      <h3>Shipping & Payment Information</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Shipping Address:
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleFormChange}
          />
        </label>

        <label>
          Billing Address:
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleFormChange}
          />
        </label>

        <label>
          Credit Card:
          <input
            type="text"
            name="creditCard"
            value={formData.creditCard}
            onChange={handleFormChange}
          />
        </label>

        <button type="submit">Place Your Order</button>
      </form>
    </div>
  </div>
);
}

export default ShoppingCart;
