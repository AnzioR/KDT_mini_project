import React ,{ useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import style from './SignUp.module.css';


import { useNavigate } from 'react-router-dom';

function SignUp() {

  const navigate = useNavigate();
  const [inpuData, setInputData] = useState({

    name: '',
    email: '',
    password: '',
    confirmPassword: ''

  });
  
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setInputData({
      ...inpuData,
      [name]: value
    })

  };

  const handleAddAccount = (event) => {
    event.preventDefault();
    if(inpuData.password === '' || inpuData.confirmPassword === '') {
      alert('비밀번호를 입력해주세요.')
      return;
    } else if (inpuData.password !== inpuData.confirmPassword) {
      alert('비밀번호가 서로 다릅니다.')
      return;
    }

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: inpuData.name,
        email: inpuData.email,
        password: inpuData.password
      })
    })
    .then(res => {
      res.json();
      if (res.ok) {
        console.log('success')
        navigate('/login')
      }
    })
  }



  return ( 
    <Form onSubmit={handleAddAccount} className={style.mt}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          이름
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} required={true}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          이메일
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} required={true}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          비밀번호
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          비밀번호확인
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="confirm password" name="confirmPassword" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">회원가입</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SignUp;