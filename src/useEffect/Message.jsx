import { useState , useEffect} from "react"
export const Message = () => {


    const [coordenadas, setcoordenadoas] = useState();
    useEffect( () => {

    
        
        const onMouseMove = ( {x ,y}) => {

            //const {x ,y} = event;
           // const coords2 = {x , y};
          //  setcoords({x , y});
          setcoordenadoas({x , y});
            console.log({x ,y});
        }
         window.addEventListener( 'mouseover',onMouseMove );
        return() =>{
            window.removeEventListener( 'mouseover',onMouseMove );
        }
    }, []);

   return (
    <>
        <h3>Usuario ya existe</h3>

        <h1>{JSON.stringify(coordenadas)}</h1>



    </>
   )

}