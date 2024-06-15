import { useState } from 'react'

function App() {
  let [counter, setCount] = useState(0)
  const incrementvalue = () => {
    if(counter<20){
      setCount(counter + 1);
    }else{
      alert("counter value should not be greater than 20")
    }
  }
  const decrementvalue = () => {
    if(counter>0){
      setCount(counter - 1);
    }else{
      alert("counter value should not be negative")
    }
  }
  return (
    <>
      <h1>priyanshu and react</h1>
      <h3>counter value:{counter}</h3>
      <button onClick={incrementvalue}>increment value</button>
      <br />
      <button onClick={decrementvalue}>decrement value</button>
    </>
  )
}

export default App
