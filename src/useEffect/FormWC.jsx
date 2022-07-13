import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWC = () => {

    /*
    {
        username: '',
        email: '',
        password: ''
    }
*/
  const { formState, onInputChange, username,email,password,reset} = useForm (
    {
        username: '',
        email: '',
        password: ''
    }
  );

  //const {username,email,password} = formState;

    useEffect(() => {

        // console.log('useEffect!!')
        //  
    }, []);
    useEffect(() => {

        //  console.log('formStat Change')
    }, [formState]);

    useEffect(() => {

        //  console.log('email Change')
    }, [email]);




    /****
     * En el useEffect si se pone, [] quiere decir que solo se llame una vez y cuando carga 
     * _Se recomienda crear tantos useEffect como efectos especificos querramos
     * 
     * 
     */

    return (
        <>

     
            <h1>Formulario con Custoom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="introduce tu nombre"
                name="username"
                onChange={onInputChange}
                value={username}
            />


            <input
                type="text"
                className="form-control mt-2"
                placeholder="introduce tu email"
                name="email"
                onChange={onInputChange}
                value={email}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contraseña"
                name="password"
                onChange={onInputChange}
                value={password}
            />



            
            <button className="btn btn-primary mt-2" onClick={ reset} >Borrar</button>
            {
                (username === 'stride2') && <Message />
            }
        </>
    )


}