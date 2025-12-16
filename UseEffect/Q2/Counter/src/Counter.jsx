import React, { use, useEffect, useState } from "react";
const Counter = ()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        if(count!==0 &count%3===0 ){
          alert(`The current value ${count} is divisible by 3`)
        }
    },[count]);
    return(
        <div>
        <h2>Counter App</h2>
        <h3>Counter:{count}</h3>
        <button onClick={()=> setCount(count+1)}>
        Increament Count </button>
        </div>
    )


}
export default Counter;