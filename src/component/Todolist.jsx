import { useState } from "react";

var Todolist =()=>{
    const [newTodo,setnewTodo] =useState('');
    const [listTodo,setlistTodo] = useState([
        
    ]);

    const handleInput = (e)=>{
        setnewTodo(e.target.value);
    }
    const handleClick = ()=>{
        setlistTodo(
            [...listTodo,{id:Math.floor((Math.random()*1000)),value:newTodo}]
        )
    }
    const handleDelete = (todoId)=>{
        var newFilter = listTodo.filter(item => item.id !== todoId);
        setlistTodo(newFilter)
    }
    return(
        <>
<h1>todolist</h1>
        <p>Add new task: {newTodo}</p>
        {listTodo.map((todo,index) =>{
            return (
                <>
            <p>{index+1}.{todo.value}  <button onClick={()=>handleDelete(todo.id)}>Delete</button></p>
           
                </>
            )})
        }
        <input type="text" onChange={handleInput}/>
        <button onClick={handleClick}>Submit</button>
        </>
);};

export default Todolist;