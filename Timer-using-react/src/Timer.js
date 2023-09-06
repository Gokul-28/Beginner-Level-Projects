import React, { useState } from 'react'
import './Timer.css';

const Timer = () => {
   const [count, setCount] = useState(0);

   const increment = () => {
    setCount (count + 1) ;
   } 

   const decrement = () => {
    setCount(count -1);
   }
   
   const reset = () => {
    setCount (count - count ) ;
   }

   const incrementFive = () => {
    setCount(count +5);
   }
   const decrementFive = () => {
    setCount(count -5);
   }
  
  return (
    <div>
      <h3 className='timer-heading'>Counter</h3>
      <label className='label'> {count} </label> <br></br>
      <button className='button-65' onClick={increment}>+ 1 </button>
      <button className='button-65' onClick={incrementFive}>+ 5 </button>
      <button className='button-65' onClick={reset}>Reset </button>
      <button className='button-65' onClick={decrement}> - </button>
      <button className='button-65' onClick={decrementFive}> - 5 </button>
    </div>
  )
}

export default Timer;