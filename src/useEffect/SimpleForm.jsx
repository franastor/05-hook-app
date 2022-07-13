import { useState , useEffect} from "react"
import { Message } from "./Message";

export const SimpleForm =() => {

    const [formState, setFormState] = useState({
        username: 'stride',
        email: 'asdasdasd'
    });

    const {username, email}   = formState;

    const onInputChange = (event)=> {

        const {name, value} = event.target;
       

        setFormState ({
            ...formState,
            [ name ] : value //con [ name ] le digo que el cambie el valor que coincida con el name

        })

    }

    useEffect( () => {

       // console.log('useEffect!!')
      //  
    }, []);
    useEffect( () => {

      //  console.log('formStat Change')
    }, [formState]);

    useEffect( () => {

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
            <h1>Formulario Simple</h1>
            <hr/>
            <input
                    type="text"
                    className="form-control"
                    placeholder={username}
                    name="username"
                    onChange={ onInputChange}
            />
            
                        <input
                    type="text"
                    className="form-control mt-2"
                    placeholder={email}
                    name="email"
                    onChange={ onInputChange}
            />
            
            {
                (username === 'stride2') && <Message />
            }
        </>
    )

    
}