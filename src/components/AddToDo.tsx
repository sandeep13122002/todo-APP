import React, { FormEvent, ReactElement, useState } from 'react'

const AddToDo = () => {
  const[todo,setTodo]=useState("");
  

   const handelFormSubmit=(e:FormEvent<HTMLElement>)=>{
   e.preventDefault();
    handelAddToDo(todo)
    setTodo("")
   }


  return (
    <form  onSubmit={handelFormSubmit}>

        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       <button type="submit">Add</button>

    </form>
  )
}

export default AddToDo