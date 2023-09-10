import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../store/ActivCatigory';
import './categories.scss';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category)); 
  };

  return (
    <div className="categories"> 
    <ul>
      {categories.map((category) => (
        <li key={category.id} onClick={() => handleCategoryClick(category)}>
          {category.name}
        </li>
      ))}
    </ul>
  </div>
);
};


export default Categories;