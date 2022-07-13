import { useState } from "react";
import { useCounter } from "../hooks"
import { SmallCounter } from "./SmallCounter";

export const Memorize = () => {
    

    const { counter , increment} = useCounter( 10);
    const [show, setShow] = useState(true);


    return (
        <>
            <h1> Counter: <SmallCounter counter = { counter }></SmallCounter></h1>
            <hr />

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
