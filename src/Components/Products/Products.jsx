import { useSelector } from 'react-redux';
import './Products.scss'; 
import Typography from '@mui/material/Typography';


const Products = () => {
  const activeCategory = useSelector((state) => state.categories.activeCategory); 
  const dummyText = useSelector((state) => state.categories.dummyText); 

  const products = useSelector((state) =>
    state.products.filter((product) => product.category === activeCategory)
  );

  return (
    <div className="products-container">

      <h1 >{activeCategory}</h1>
           <h3> {dummyText}</h3>
        <div className="products">
    
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imgPath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventoryCount}</p>
            <div className="buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="view-details">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;