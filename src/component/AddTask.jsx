import { Form ,Input,Button} from "antd"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AddTask(){

    const [form] = Form.useForm()
    const nav = useNavigate()
    function onFinish(values){
        console.log(values)
        let token = localStorage.getItem('token')
        axios(
            {
                url: "https://backoffice.nodemy.vn/api/tasks",
                method: 'POST',
                headers: { 
                    'Authorization': 'Bearer '+ token, 
                    'Content-Type': 'application/json'
                  },
                  data:{
                    "data": {
                        "title": values.title
                      }
                  }
            }
        ).then(res=>{
           alert('tao task thanh cong')
        })
        .catch(err=>{
            alert('tao task that bai')
        })
        form.resetFields();
        nav('/tasks')
    }
    return (

        <>
        <h1>Add a new task</h1>
        <Form form={form} name="basic" onFinish={onFinish}>
            <Form.Item name='title' >
            <Input ></Input>
            </Form.Item>
            <Button type='primary' htmlType='submit'>submit</Button>
        </Form>

        </>
    )
}