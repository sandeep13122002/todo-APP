import {ReactNode, createContext, useState} from 'react';


export type todosProviderProps={
    children:ReactNode;
}

export type Todo={
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}
export type TodosContext={
    todos:Todo[];
     handelAddToDo:(task:string)=>void;
}


export const todosContext=createContext<TodosContext|null>(null)


export const TodosProvider=({children}:todosProviderProps)=>{
     
    const [todos,setTodos]=useState<Todo[]>([])
      const handelAddToDo=(task:string)=>{

      }

    return <todosContext.Provider  value={{todos,handelAddToDo}}>
        {children}
    </todosContext.Provider>
          
    
}