
import { useCounter, useFecht, useForm } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);



    const base = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError } = useFecht(base);



    // console.log ({ data , isLoading, hasError});

    //const prueba = useFecht( base );

    const { author, quote } = !!data && data[0]; //como es una funcion asincrona hasta que cargue no hay cvalor, con esto le decimos si existe data y cuando data tenga valor lo desestructuras


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <h3>{counter}</h3>
            <hr />


            {
                isLoading ? 
                    <LoadingQuote></LoadingQuote>
                    //<div className="alert alert-info text-center"> Loading ...</div>

                 :
                    
                        <Quote cuota={quote} autor = {author}></Quote>
                    
            }
            <div >

                <div > <button className="btn btn-primary" onClick={() => increment(1)}>Siguiente</button></div>
                <div ><button className="btn btn-secondary" onClick={() => decrement(1, 1)}>Anterior</button></div>

            </div>






        </>
    )
}