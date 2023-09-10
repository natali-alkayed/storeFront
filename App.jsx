import Header from './src/Components/Header/Header';
import Footer from './src/Components/Footer/Footer';
import Categories from './src/Components/Categories/Categories';
import Products from './src/Components/Products/Products';
import { Provider } from 'react-redux';
import store from './src/store/index';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Provider store={store}>
        <div className="content">
          <Categories />
          <Products />
        </div>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;