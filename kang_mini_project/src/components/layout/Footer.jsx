import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Footer.module.css'
import Dropdown from 'react-bootstrap/Dropdown';

function Footer () {
  return (
    <div className={style.container}>
      <div>
        <div className={style.footerNav}>
        </div>
        <div className={style.companyInfo}>
          <p>(주) 이마트24</p>
          <p>대표이사:김장욱 / 사업자등록번호: 123-45-67890</p>
          <p>서울특별시 성동구 성수동 2가 281-4 푸조비즈타워 / 고객센터: 02-6916-1500 / Fax: 02-6919-1430</p>
          <p>COPYRIGHT (C) EMART24.ALL RIGHT RESERVED</p>
        </div>
      </div>
      <div className={style.familySns}>
        <div>
        <Dropdown>
          <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
            패밀리 사이트
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="https://www.shinsegaegroupnewsroom.com/" target="_blank">신세계 그룹</Dropdown.Item>
            <Dropdown.Item href="https://www.shinsegae.com/index.do" target="_blank">신세계백화점</Dropdown.Item>
            <Dropdown.Item href="https://store.emart.com/main/main.do" target="_blank">이마트</Dropdown.Item>
            <Dropdown.Item href="https://www.ssg.com/" target="_blank">SSG.COM</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className={style.snsIcon}>
          <NavLink to = "https://www.youtube.com/channel/UCSQ0lVqv57JVw1lOdJ2vTVA?view_as=subscriber" target="_blank">
            <img src="https://www.emart24.co.kr/assets/assets/imgs/snsYutube.png" alt=""/>
          </NavLink>
          <NavLink to = "https://www.instagram.com/emart24_official" target="_blank">
            <img src="https://www.emart24.co.kr/assets/assets/imgs/snsInsta.png" alt=""/>
          </NavLink>
          <NavLink to = "https://www.facebook.com/emart24.official" target="_blank">
            <img src="https://www.emart24.co.kr/assets/assets/imgs/snsFacebook.png" alt=""/>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;