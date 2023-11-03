import { useEffect, useState } from "react"
import axios from 'axios'
import {List, Avatar,Button,Dropdown} from 'antd'
import{
    MoreOutlined,
    UserOutlined
} from '@ant-design/icons'
import { useNavigate } from "react-router-dom"
import { Menu } from 'antd';
export default function TaskList(){
    const [list, setList] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        axios({
            url: 'https://backoffice.nodemy.vn/api/tasks?populate=*',
            method: 'GET'
        })
        .then(res=>{
            console.log(res.data.data);
            setList(res.data.data)
        })
        .catch(err=>{

        })

    }, [])

    function deleteTask(id){
        let token = localStorage.getItem('token')

        axios(
            {
                url:`https://backoffice.nodemy.vn/api/tasks/${id}`,
                method:'DELETE',
                headers: { 
                    'Authorization': 'Bearer '+ token, 
                    'Content-Type': 'application/json'
                  }
            }
            
        ).then(
            res=>{
                console.log('xoa thanh cong')
                setList(list.filter(item=>item.id != id))
            }
        ).catch
        (err=>{
            console.log('xoa that bai')
        }
        )
    }


    const items = [
        {
            label:'Xoa',
          key: '1',
          icon: <UserOutlined />,
        },
        {
            label:'Chi tiet',
          key: '2',
          icon: <UserOutlined />,

        },
       
      ];
      
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Danh sách công việc của Sơn</h1>
            <Button type='primary' onClick={()=>{nav('/add')}}>Add Task</Button>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, index) => {
                    console.log(item)
                    let anh = "https://backoffice.nodemy.vn" + item?.attributes?.image?.data?.attributes?.url
                    console.log(anh)
                    return (
                        <>
                            <List.Item>
                                <List.Item.Meta
                                avatar={<Avatar src={anh}></Avatar>}
                                description={item?.attributes?.title}
                                />
                                {/* <Button onClick={()=>{
                                    deleteTask(item.id)
                                }}>Delete</Button> */}
                                <Dropdown.Button
                                style={{width:'unset'}}
                                dropdownRender={()=>{
                                    return(
                                        <>
                                        <Button style={{background:"#000",color:"#fff"}} onClick={()=>{
                                            deleteTask(item.id)
                                        }}>Xóa {item.id}</Button>
                                       <Button  type="primary" danger onClick={()=>{
                                            nav(`/tasks/${item.id}`)
                                        }}>Sửa {item.id}</Button>
                                        </>
                                    )
                                }}
                                >
      More
    </Dropdown.Button>        
    </List.Item>
                        </>
                    )
                }
                    
                
                }
            />
        </>
    )
}