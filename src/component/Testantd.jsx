import { useRef, useState } from "react";
import React from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {PhoneOutlined} from '@ant-design/icons';
import { Col, Row,Layout,Form ,Input,DatePicker} from 'antd';
import dayjs from "dayjs";
import axios from "axios";
const App = () => {
  const [form] = Form.useForm();
  const nameValue = Form.useWatch('username',form);
  return(
  <>
 <Layout>
  <Row>Head</Row>
  <Row>
    <Layout>
      <Row>
      <Col span={12}>side </Col>
      <Col span={12}>content</Col>
      </Row>
    
    </Layout>
  </Row>
  <Row>Foot</Row>
 </Layout>
 <h1>{nameValue}</h1>
 <Form form={form} name='loginForm' onFinish={(value)=>{
  axios.post({
    url: 'abc',
    method:'POST',
    data: value
 }).then(()=>{alert('login sucess')})
 .catch(()=>{alert('fail')});
 }}
 initialValues={{
  username: 'Sonpt',
  pass:'123'
 }}
 >
 <Form.Item label="Name" name="username" >
  <Input></Input>
 </Form.Item>
 <Form.Item label="Password" name="password">
  <Input.Password></Input.Password>
 </Form.Item>
 <Button htmlType="submit">Dang nhap</Button>
 <Form.Item name='ngaysinh'>
  <DatePicker></DatePicker>
 </Form.Item>
 </Form>
 
 <Button onClick={()=>{form.setFieldsValue({username:'son pham',password:'abc324832432',ngaysinh:dayjs('8/9/2002')})}}>click</Button>
 <Button onClick={()=>{form.setFieldsValue({username:'',password:''})}}>delete</Button>
</>
  )
}
  {/* <Space wrap>
    <Typography> <Paragraph copyable={{ tooltips: false }}>AAAAAAAA</Paragraph> </Typography>
    <Button type="primary" size="large" icon={<PhoneOutlined />}
    ghost
    shape="circle"
    style={{
      width:300,
      height:300,}
    }
    >Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space> */}

  // const usernameRef = useRef();
  // const passwordRef = useRef();
  // const [info,setInfo] = useState({
  //   username:'',
  //   password:'',
  // });
  // function xuly(e){
  //   let value=  e.target.value
  //   let key = e.target.getAttribute('keymuonset')
  //     setInfo({...info,[key]:value})
  // }
  // return (
  //   <>
  //   username<input type="text" keymuonset="username" ref={usernameRef} onChange=
  //    {xuly}
  //   />
  //   password<input type="text" keymuonset="password" ref={passwordRef} onChange= {xuly}/>

  //   Thong tin vua nhap: {info.username} , {info.password}
  //   <button onClick={()=>{
  //     console.log(usernameRef.current.value)

  //   }}>submit</button>
  //   </>
  //  );
 

export default App;