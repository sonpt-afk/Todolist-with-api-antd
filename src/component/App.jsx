import { useRef, useState } from "react"
import {
  Button,
  Typography,
  Row, 
  Col,
  Layout,
  Form,
  Input,
  DatePicker,
  message
} from 'antd'
import { 
  SearchOutlined,
  PhoneOutlined
 } from '@ant-design/icons';
import dayjs  from 'dayjs'
const { Header, Footer, Content, Sider } = Layout
import axios from 'axios'

export default function App(){
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm()

  return (
    <>  
      {contextHolder}
      <Form
        form={form}
        name="loginForm"
        onFinish={(values)=>{
          axios({
            url: 'https://backoffice.nodemy.vn/api/auth/local',
            method: 'POST',
            data: values
          }).then(res=>{
            let data = res.data
            messageApi.info('Ban dang thanh cong')
          })
          .catch(err=>{
            messageApi.error('Sai Thong tin tai khoan')
          })


        }}
        initialValues={{
          username: 'KhanhNN',
          password: 'QuanDM'
        }}
      >
        <Form.Item 
          label="Ho Va Ten"
          name="identifier"
        >
          <Input></Input>
        </Form.Item>
        <Form.Item 
          label="Mat khau"
          name="password"
        >
          <Input.Password></Input.Password>
        </Form.Item>
        
        <Form.Item
          name="ngaysinh"
        >
          <DatePicker></DatePicker>
        </Form.Item>

        <Button htmlType="submit">Dang Nhap</Button>
      </Form>

      <Button onClick={()=>{
        form.setFieldsValue({
          username: 'Zippo CF',
          password: 'Cuongdv',
          ngaysinh: dayjs('2000/10/20')
        })
      }}>Fill thong tin</Button>
    </>
  ) 
}
