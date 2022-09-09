import React from 'react'
import { useState } from 'react'
import './todo.css'

const Todo = () => {

    const [todoList, setTodoList] = useState(['task1','task2','task3'])
    const [task, setTask] = useState("")
    const addnewtask = ()=>{
     if(task){
        setTodoList([ ...todoList,task]);
        setTask("");
     }
        
     
    }
    const removeTask = (index)=>{
       let temp = todoList;
       temp.splice(index,1);
       setTodoList([...temp])
    }
    const showTodolist = () =>{
    return todoList.map((task,index) => {return <div className='d-flex task-body justify-content-between'>
         <p>{task}</p> 
         <button className='btn btn-danger' onClick={()=>{ removeTask(index) }}>  <i className="fas fa-trash"></i> </button>
         
         </div> } );
   
    }
  return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h3>Todo list</h3>
                    <hr />
                    <div className="input-group">
                        <input type="text" className="form-control" value={task} onChange={(e) => {setTask(e.target.value) }}/>
                        <button onClick={addnewtask} className='btn btn-info'>ADD TASK</button>
                    </div>
                    {showTodolist()}
                </div> 
            </div>
        </div>
  )
}

export default Todo