import React, { useLayoutEffect, useRef, useState } from "react"

export const Quote = (props) => {


    const {cuota, autor } = props;
    const pRef = useRef();
    const [tamano, setTamano]= useState({ width: 0, height: 0})

    useLayoutEffect (() =>{

       // console.log(pRef.current.getBoundingClientRect())
        const {height , width} = pRef.current.getBoundingClientRect();

       setTamano({
        width,
        height
      
    })

    },[])

    return (
        <>


            <blockquote 
              className="blockquote text-end"
              style={ { display : 'flex' }}
              >
                <p  ref={ pRef} className="mb-1">{cuota}</p>
                <footer className="blockquote-footer">{autor} </footer>

            </blockquote>

            <code>{ JSON.stringify(tamano)}</code>




        </>


    )
}