import { useCallback, useState } from "react"
import { ShowIncrement } from "./showIncremetn";

export const CallbackHok = () => {
    const [counter, setCounter] = useState(1);
    const incrementFather = useCallback ( 
        () => {
            setCounter ( (value) => value + 1) ; //esto es lo mismo que setCounter ( counter +1)
        },
        [ ],
    )
    
    


    return (
        <>
            <h1>useCallback Hook :  {counter}</h1>
            <hr></hr>
            <ShowIncrement increment={ incrementFather }/>
           
        </>
    )
}