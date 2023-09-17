import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Products.scss';
import { addToCart } from '../../store/carts';
import { decreaseInventory } from '../../store/products';
import { fetchInventory } from '../../store/Api';

const Products = () => {
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInventory()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(decreaseInventory(product.id));
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <div className="products-container">
      <h1>{activeCategory}</h1>
      <div className="products">
        {products
          .filter((product) => product.category === activeCategory)
          .filter((product) => product.inventoryCount > 0)
          .map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.imgPath} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Inventory: {product.inventoryCount}</p>
              <div className="buttons">
                <button
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
                <button className="view-details">View Details</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;
