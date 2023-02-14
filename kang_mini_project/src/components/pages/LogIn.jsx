import React from 'react';
import style from './LogIn.module.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LogIn () {
  return (
    <div className={style.login}>
      <div className={style.inputBox}>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일"
          className={style.floatingLabel}
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel 
          controlId="floatingPassword" 
          label="비밀번호"
          className={style.floatingLabel}
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </div>
      <div>
        <p className={style.signup}><Link to={`/signup`}>회원가입</Link></p>
        <p>아이디, 비밀번호찾기</p>
      </div>
      <div>
        <Button variant="outline-secondary">로그인</Button>
      </div>
    </div>
  );
}

export default LogIn;