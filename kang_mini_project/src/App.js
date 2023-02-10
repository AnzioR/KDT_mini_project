import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Cart from './components/pages/Cart';
import LogIn from './components/pages/LogIn';
import Main from './components/pages/Main';
import ProductDetail from './components/pages/ProductDetail';
import { RecoilRoot } from 'recoil';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
