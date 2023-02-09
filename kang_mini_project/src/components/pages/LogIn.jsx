import React from 'react';
import style from './LogIn.module.css';

function LogIn () {
  return (
    <div className={style.login}>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="text" placeholder="Password" />
      </div>
      <div>
      아이디, 비밀번호찾기
      </div>
      <div>
        <button>로그인</button>
      </div>
    </div>
  );
}

export default LogIn;