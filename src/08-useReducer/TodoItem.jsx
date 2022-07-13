export const TodoItem = ({ todo, onRemoveTodo , onToggleTodo }) => {



    const vamoBorrar = (todo) => {

        const { id } = todo;




        onRemoveTodo({ todo });
        /*
    
    
     const newTodo = {
                done:false,
                id: new Date().getTime(),
                description : description
    
    
            }
    
            onNewTodo(newTodo);
    
    
        */
        //onRemoveTodo ({todo});
        // reset();
    }

    //console.log(todo.id)
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through' : '' }` }
                onClick={ () => onToggleTodo ( todo.id) }
            >
                {todo.description}

            </span>
            <button className="btn btn-danger"
                onClick={() => vamoBorrar({ todo })}
            > Borrar</button>
        </li>
    )

}