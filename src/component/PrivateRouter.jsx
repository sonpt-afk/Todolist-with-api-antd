import { Navigate } from "react-router-dom"

export default function PrivateRouter(props) {
    let token = localStorage.getItem('token')
    if(token){
        // da dang nhap
        return props.children
    }else{
        //chua dang nhap
      return <Navigate to={'/login'}></Navigate>

    }
}