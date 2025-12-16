import { useState} from "react";

function Calculator(){
    const[num1,setNum1]=useState("");
    const[num2,setNum2]=useState("");
    const[operation,setOperation]=useState("Add");
    const[results,setResults]=useState([]);
    
    const handleCalculate=()=>{
        const a=Number(num1);
        const b=Number(num2);
        let result;
        if (operation=="Add"){

            result=a+b;
         }else if(operation=="Subract"){
            result=a-b;
         }else if (operation=="Multiply"){
            result=a*b;
         }
         setResults([...results,result]);
    };
    return(
        <div>
            <h2>Basic calculations</h2>
            <input
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e)=>setNum1(e.target.value)}
            />
            <input
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e)=>setNum2(e.target.value)}
            />
            <select
            value={operation}
            onChange={(e)=>setOperation(e.target.value)}
            >
                <option value="Add">Add</option>
                <option value="Subract">Subract</option>
                <option value="Multiply">Multiply</option>
            </select>
            <button onClick={handleCalculate}>Peform Action</button>
        <h3> Results</h3>
        <ul>
            {results.map((res,index)=>(
                <li key={index}>{res}</li>
            ))}
        </ul>
        </div>
    );
    
}
export default Calculator;