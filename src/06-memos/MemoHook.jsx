import { useMemo, useState } from "react";
import { useCounter } from "../hooks"


const heavyStuff = ( iterarionNumber = 100 ) => {
    for (let i = 0 ; i<iterarionNumber; i++) {

        console.log ("ahi vamos.....")


    }

    return `${ iterarionNumber } iteraciones realizadas`

}

export const Memohook = ( ) => 
{
    
    

    const { counter , increment} = useCounter( 4000);
    const [show, setShow] = useState(true);
    
    const memorizedValue = useMemo ( ()=> heavyStuff(counter), [counter])  //esto hace que solo cambie cuando se cambie el valor de counter


    return (
        <>
            <h1> Counter: <small> { counter }</small></h1>
            <hr />
        
            <h4> { memorizedValue }</h4>

            <button
                className="btn btn-primary mt-2"
                onClick={() =>increment(5) }
            >
                    +5

            </button>

            <button
                className="btn btn-outline-primary mt-2"
                onClick={() =>setShow(! show) }
            >
                    Show/Hide { JSON.stringify(show)}

            </button>
            
        
        
        
        
        </>
    )

}
