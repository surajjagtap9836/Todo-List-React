import React, { useState } from 'react';
import toast,  { Toaster} from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid';
import bin from './images/bin.png'
import plus from './images/plus.svg'
 

import './Todo.css';

function Todo() {
 const  [todolist,settodolist]=useState([]);
 const [newtodo,setnewtodo]=useState("");
 const[category,setcategory]=useState("")
 
 const icon={
  Learning:"📖",
  Health:"🏃‍♂️",
  work:"💼",
  personal:"🏡",
  other:"🎥"
}
 

 let additem=()=>{
  
    if (newtodo===""){
      toast.error("Task Not Added Please Add Task...")
      return
    }
    if (category===""){
      toast.error("select catogory...")
      return
    }
      
    {
      settodolist([...todolist,{task:newtodo,category:category,id:uuidv4()}]);
      setnewtodo("") 
      setcategory("")
      toast.success("Task Added successfully !")
    }

}
 let select=(event)=>{
 setcategory(event.target.value)

 }
 let update=(event)=>{
  setnewtodo(event.target.value);
 }
 
 let deleteitem=(id)=>{
    let copy=todolist.filter((eid)=>eid.id!=id)
    settodolist(copy);
    
    
    
  
 }

  return (
    <>
    <div className='main'>
      
        <h1 className='todo-title'>Todo List📝</h1>
        <div className='container'>
          <p className='name'>List items...</p>

          {

          todolist.map((todos)=>{
            const{task ,category}=todos;
            
          
            return(<div className='return'key={todos.id}>
             
            <h2 className='items' > 
              <img src={bin} 
              className='bin'
               onClick={()=>deleteitem(todos.id)}
               />

              <span className='span'>{task}</span>
            <span className='category'>{icon[category]} {category}</span>
              </h2>
              </div>)
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

            <select 
            className='select'
            value={category}
            onChange={select}>

            <option value={""}>Select category</option>
              <option value={"Learning"}>Learning</option>
              <option value={"Health"}>Health</option>
              <option value={"work"}>work</option>
              <option value={"personal"}>personal</option>
              <option value={"others"}>others</option>

            </select  >


            <img src={plus} 
            className='add-btn'
            onClick={additem} 
            
            />
            <Toaster/>
          </>
          
        </div>
        
          
        
    </div>
    </>
  )
  
}

export default Todo
