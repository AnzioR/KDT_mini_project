import React from 'react';
import style from './LogIn.module.css';
import Button from 'react-bootstrap/Button';

function LogIn () {
  return (
    <div className={style.login}>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
      아이디, 비밀번호찾기
      </div>
      <div>
      <Button variant="outline-secondary">로그인</Button>
      </div>
    </div>
  );
}

export default LogIn;