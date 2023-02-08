import React from 'react';
import ProductList from './ProductList';
import style from './Main.module.css';

function Main () {
  return (
    <div className={style.main}>
      <div className={style.cartegory}>
        전체상품보기
      </div>
      <div className={style.list}>
        <ProductList />
      </div>
    </div>
  );
}

export default Main;