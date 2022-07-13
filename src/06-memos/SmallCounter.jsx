import { memo } from "react"

export const SmallCounter = memo ( ({counter }) => {

    

    console.log("me volvi a dibujar :(")
    return (<small> { counter }</small>)

})
