import { useState } from "react"
import { useForm } from "../hooks";

export const TodoAdd = ( {onNewTodo }) => {

     const {description, reset, onInputChange } = useForm ({
        description : ''
     })
     const onFormSubmit = (event ) => {

        event.preventDefault();

        if ( description.length <= 1 ) return ;
        const newTodo = {
            done:false,
            id: new Date().getTime(),
            description : description


        }

        onNewTodo(newTodo);
        reset();

     }

        return (
            <form onSubmit={ onFormSubmit } >
                        <input
                        type="text"
                        placeholder="¿Que hay que hacer?"
                        name="description"
                        className="form-control"
                        value= { description}
                        onChange = { onInputChange }
                       
                        >
                        </input>
                        <button
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                       
                        >
                            Agregar
                        </button>
                    </form>
        )
    
    }