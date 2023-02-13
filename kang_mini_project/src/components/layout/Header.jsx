import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import style from './Header.module.css'


function Header () {
  return (
    <div className={style.header}>
      <div>
        <NavLink to ='/'>
        <img src="https://www.emart24.co.kr/assets/assets/imgs/logo.png" alt="" />
        </NavLink>
      </div>
      <div className={style.headerNav}>
        <p><Link to='/productlist'>상품</Link></p>
        <p>매장찾기</p>
        <p>서비스</p>
        <p>이벤트</p>
        <p>창업안내</p>
      </div>
      <div className={style.headerIcon}>
        <NavLink to='/login'>
        <img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-mypage.svg" alt="" />
        </NavLink>
        <NavLink to='/cart'>
        <img src="https://pics.gmarket.co.kr/pc/single/kr/common/image__header-cart.svg" alt="" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;