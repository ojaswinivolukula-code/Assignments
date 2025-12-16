import { useState } from "react";
function Counter(){
     const [ Count,setCount]=useState(0);
    return(
        
        <div>
            <h3>Count: {Count}</h3>
            <button onClick={()=>setCount(Count+1)}>
                Increment
            </button>
        </div>
    );
}
export default Counter;