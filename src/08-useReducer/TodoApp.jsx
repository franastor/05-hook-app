import { useEffect, useReducer } from "react"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"
import { todoReducer } from "./todoReducer"
import { useTodo } from "../hooks";

export const TodoApp = () => {

/*
        {
            id: new Date().getTime(),
            description: 'Recolertar la piedra del alma',
            done: false
        },
        {
            id: new Date().getTime() + 100,
            description: 'Recolertar la piedra del poder',
            done: false
        }
*/
/***************************************************************************************************************** */

/*
    const initialState = [


    ]

    const inicio = () => {
        return JSON.parse( localStorage.getItem('todos') ) || []; //intenta parsear el string de todos y convertirlo en un json. y sino tiene contenido lo devuelve vacio
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState , inicio) // con init le vamos a dar un valor inicial al initialState

    useEffect( () => {
           localStorage.setItem('todos',JSON.stringify( todos || [] )); //por si todos es null
    },[todos])
    const handNewTodo = ( todo ) => {   ///con esto hacemos que el reducer funcione.
   

        const action = {
            type: '[TODO] Add todo',
            payload: todo 
        }

        dispatch (action) //Aqui se lanza el reducer pasandole la accion

      
    }

    const handRemoveTodo = ( todo )=> {

        
        const action = {
            type: '[TODO] Remove todo',
            payload: todo.todo.todo.id
        }
        dispatch (action) 
    }

    const handleToggleTodo = ( todo )=> {

        
        const action = {
            type: '[TODO] Toogle todo',
            payload: todo
        }
       
        dispatch (action) 
    }

    */

    const { handleToggleTodo, handRemoveTodo, handNewTodo, todos, pendingTodosCount , totalCount } = useTodo();

    return (
        <>
            <h1>TodoApp { totalCount}<small>, pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                  <TodoList 
                  onRemoveTodo = { todo => handRemoveTodo( todo )} 
                  onToggleTodo = { todo => handleToggleTodo( todo )} 
                  
                  todos = { todos }
                  
                  />
                  

                </div>
                <div className="col-5">
                    <h4>Agregar ToDo</h4>
                    <hr></hr>
                    <TodoAdd onNewTodo = {todo => handNewTodo( todo)} >/</TodoAdd>
                </div>
            </div>



        </>
    )
}