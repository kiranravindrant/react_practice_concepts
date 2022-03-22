import React from 'react'
import UseInput from './UseInput'


function TestCustomHook() {
    const[textval,takeInput]=UseInput("")
    return (
        <div>
            <input type="text" placeholder='Enter your Name' onChange={(event)=>takeInput(event)}></input>
            <h1>hello {textval}, Now you have created a custom hook!!</h1>
        </div>
    )
}

export default TestCustomHook
