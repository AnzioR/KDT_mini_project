import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import LogIn from './components/pages/LogIn';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
