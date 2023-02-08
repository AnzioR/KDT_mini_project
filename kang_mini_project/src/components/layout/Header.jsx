import React from 'react';
import { NavLink } from 'react-router-dom'
import style from './Header.module.css'


function Header () {
  return (
    <div className={style.header}>
      <NavLink to ='/'>
      <img src="https://www.emart24.co.kr/assets/assets/imgs/logo.png" alt="" />
      </NavLink>
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