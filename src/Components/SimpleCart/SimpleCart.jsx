import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/carts';
import { increaseInventory } from '../../store/productSlice';
import DeleteOutlinedIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'; 
import './SimpleCart.scss';

const SimpleCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    dispatch(increaseInventory(itemId));
  };

  return (
    <div>
      <ul style={{ margin: '4px' }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <li style={{ marginRight: '10px' }} key={item.id}>
              {item.name} : ({item.quantity})
              <button style={{ padding: '1px', marginLeft: '10px' }} onClick={() => handleRemoveFromCart(item.id)}>
                <DeleteOutlinedIcon style={{ fontSize: '17px' }} />
              </button>
            </li>
          ))
        ) : (
          <li style={{ margin: '10px' }}>Your cart is empty</li>
        )}
      </ul>

 
      <Link to="/cart">View Shopping Cart</Link>
    </div>
  );
};

export default SimpleCart;
