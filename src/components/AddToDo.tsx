import{ FormEvent,  useState } from 'react'
import { useTodos } from '../store/todo';


const AddToDo = () => {
  const[todo,setTodo]=useState("");
  const {handelAddToDo}=useTodos();

   const handelFormSubmit=(e:FormEvent<HTMLElement>)=>{
   e.preventDefault();
   handelAddToDo(todo);
    setTodo("");
   }


  return (
    <form  onSubmit={handelFormSubmit}>

        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
       <button type="submit">Add</button>

    </form>
  )
}

export default AddToDo

