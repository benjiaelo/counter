import React, {useState}from 'react'

export default function FunctionCounter() {
    const [number,setNumber]=useState(0)
    const Increment=() => {
        setNumber(number + 1);
    }
    
        const Decrement=() => {
            setNumber(number - 1);
        }

  return (
    <div>
        

    <h1> Functional Counter {number}</h1>
      <button onClick={Increment}>increase</button>
      <button onClick={Decrement}>decrease</button>
   


    </div>
  )
}