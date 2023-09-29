import React, { useEffect,useState } from "react";
import ShowResult from "./ShowResult/ShowResult";
import { ClassSeries } from "../utils/ClassSeries";

const Calculator = ({number}) => {
    const [result, setResult] = useState(0)
      const calculator =(n) =>{
        const result = ClassSeries.serie(n)
        setResult(result)
    
      }
 
useEffect(()=>{
    calculator(number)
},[number])
    return (
        <ShowResult result={result}/>
    )
}

export default Calculator;