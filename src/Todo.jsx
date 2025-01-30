import React, { useState } from 'react';
import toast,  { Toaster} from 'react-hot-toast'
import plus from "./../../images/plus.svg" ;
import './Todo.css';

function Todo() {
  const  [todolist,settodolist]=useState(["Go to College"]);
 const [newtodo,setnewtodo]=useState([""]);

  let additem=()=>{
    settodolist([...todolist,newtodo]);
    setnewtodo("") 
    toast.success("Task Added successfully !")
  }
 
 let update=(event)=>{
  setnewtodo(event.target.value);
 }

  return (
    <>
    <div className='main'>
      
        <h1 className='todo-title'>Todo List📝</h1>
        <div className='container'>
          <p className='name'>List items...</p>
         {
          todolist.map((todos)=>{
            return(
            <h3 className='items'>{todos}</h3>
          )
          })
         }

        </div>

        <div className='input'>
          <>
            <input type='text'
            placeholder='Add New Task Here' 
            className='inputfeild' 
            value={newtodo}
            onChange={update} />


            <img src={plus} 
            className='add-btn'
            onClick={additem} />
            
          </>
        </div>
        <Toaster/>
    </div>
    </>
  )
  
}

export default Todo
