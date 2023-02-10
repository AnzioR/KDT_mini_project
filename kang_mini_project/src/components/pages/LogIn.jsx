import React from 'react';
import style from './LogIn.module.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function LogIn () {
  return (
    <div className={style.login}>
      <div>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className={style.floatingLabel}
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel 
          controlId="floatingPassword" 
          label="Password"
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