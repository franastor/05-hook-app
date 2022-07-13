import { useState } from "react"
import { useSyncExternalStore } from "react"
import { UserContext } from "./UserContext"
 //por narices tiene que llamarse children lo que le pasas porque quiere decir que le estas pasando los hijos.

 //const user = {
   // id: 123,
   // name: 'Fernando Herrera',
    //email: 'fernando@google.com'
 //}
 export const UserProvider = ({ children }) => {  

    const [user, setUser] = useState();
return (
   //<UserContext.Provider value = {{hola: 'Mundo', user: user}}>
   <UserContext.Provider value = {{ user, setUser }}>
        { children }
   </UserContext.Provider>
)

}