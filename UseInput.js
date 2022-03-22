import { useState } from "react"

function UseInput(initialValue="") {

 const[textval,setValue]=useState(initialValue)

 const takeInput=(e)=>setValue(e.target.value)



    return ([textval,takeInput])
       
}



export default UseInput
