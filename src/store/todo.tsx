import {ReactNode, createContext, useContext, useState} from 'react';


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
     toggleTodoAsCompleted:(id:string)=>void;
     handelDeleteTodo:(id:string)=>void;
}


export const todosContext=createContext<TodosContext|null>(null)


export const TodosProvider=({children}:todosProviderProps)=>{
     
    const [todos,setTodos]=useState<Todo[]>(()=>{
       try{
        const newTodos=localStorage.getItem("todos")||"[]";
         return JSON.parse(newTodos) as Todo[]

       }catch(error){
        return []
       }


    })









      const handelAddToDo=(task:string)=>{
                setTodos((prev)=>{
                     const newTodos:Todo[]=[
                      {
                        id:Math.random().toString(),
                        task:task,
                        completed:false,
                        createdAt:new Date()
                      } , 
                     ...prev
                     ]
                    //    console.log(newTodos);
                    localStorage.setItem("todos",JSON.stringify(newTodos))
                    return newTodos;



                })
      }

      const toggleTodoAsCompleted=(id:string)=>{
                     setTodos((prev)=>{
                        let newtodos=prev.map((todo)=>{
                            if(todo.id === id){
                                return {...todo,completed:!todo.completed}
                            }
                            return todo
                        })
                        localStorage.setItem("todos",JSON.stringify(newtodos))
                        return newtodos
                     }

                     )
      }
     
const handelDeleteTodo=(id:string)=>{
    setTodos((prev)=>{
        let newtodos=prev.filter((filter)=>filter.id != id);
        localStorage.setItem("todos",JSON.stringify(newtodos))
        return newtodos;
    })
}




    return <todosContext.Provider  value={{todos,handelAddToDo,toggleTodoAsCompleted,handelDeleteTodo}}>
        {children}
    </todosContext.Provider>
          
    
}


export const useTodos=()=>{
                  const todosConsumer=useContext(todosContext);

                if(!todosConsumer){
                    throw new Error("useTods used outside of Provider");
                }
                return todosConsumer;

}


