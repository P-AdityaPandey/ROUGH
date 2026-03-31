import { useState } from 'react';
import './Counter.css'

function Counter() {
    const [count, setCount] = useState(0);

  return (
   <div id='counter'>
    <h2>COUNTER</h2>
    <p>The Count is {count}</p>
    <div>
        <button onClick={()=> setCount(count+1) }>INCREASE</button>
        <button onClick={()=> setCount(count-1) }>DECREASE</button>
        <button onClick={()=> setCount(0) }>RESET</button>
    </div>

   </div>
  )
}

export default Counter;