import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductDetails.scss';
import { addToCart } from '../../store/carts';
import { decreaseInventory } from '../../store/productSlice';
import { fetchInventory } from '../../store/Api';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInventory()
      .then((data) => {
        const selectedProduct = data.find((product) => product.id === Number(productId));

        if (selectedProduct) {
          setProduct(selectedProduct);
          setLoading(false);
        } else {
          setError(new Error('Product not found'));
          setLoading(false);
        }
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      dispatch(decreaseInventory(product.id));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      <div className="product-details">
        <img src={product.imgPath} alt={product.name} className="product-image" />
        <div className="product-info">
          <h2 className="product-name">{product.name}</h2>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-description">Description: {product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-inventory">Inventory: {product.inventoryCount}</p>
          <button className="add-to-cart1" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
