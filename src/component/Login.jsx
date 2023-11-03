import React from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

function Login() {
  const nav =useNavigate()
 function onFinish(values){
  axios({
    url:'/auth/local',
    method:'POST',
    data:values,
    headers:{
      'Content-Type':'application/json'
    }
 
  })
  .then(res=>{
    localStorage.setItem('token',res.data.jwt)
    localStorage.setItem('user',JSON.stringify(res.data.user))
    nav('/tasks')
  })
  .catch(res=>{
    console.log('res',res)

  })
 }
    return (
      <>
        <h1>Login</h1>

  <Form
    style={{width:300}}
    onFinish={onFinish}
  >
    <Form.Item name='identifier' label='Username'>
      <Input></Input>
    </Form.Item>
    <Form.Item name='password' label='Password'>
      <Input.Password></Input.Password>
    </Form.Item>
    <Button type='primary' htmlType='submit'>Submit</Button>
  </Form>
      </>
);
    
}

export default Login;
