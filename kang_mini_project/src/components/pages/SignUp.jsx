import React ,{ useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

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
    <Form onSubmit={handleAddAccount} className="mt-5">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} required={true}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} required={true}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          confirm password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="confirm password" name="confirmPassword" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SignUp;