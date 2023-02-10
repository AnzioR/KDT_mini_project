import React from 'react';
import ProductList from './ProductList';
import style from './Main.module.css';
import Button from 'react-bootstrap/Button';

function Main () {
  return (
    <div className={style.main}>
      <div className={style.cartegory}>
      <Button variant="outline-dark">전체상품보기</Button>
      </div>
      <div className={style.list}>
        <ProductList />
      </div>
    </div>
  );
}

export default Main;