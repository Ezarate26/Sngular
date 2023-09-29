import React,{useState} from "react";
import Calculator from "../Calculator";
import styles from "./InputNumber.module.css"

const InputNumber = () => {
    const [number, setNumber] = useState(0)
    
    const handleInputChange = (e)=>{
        setNumber(e.target.value)
    }
    return ( 
        <div className={styles.container}>
        <div className={styles.content}> 
        <h3 className={styles.title}>
          Ingrese un número para realizar la operación:
        </h3>
        <input className={styles.input} type='number'value={number} onChange={handleInputChange}/>
        <Calculator number={number}/>
        </div>
        </div>
       )

}

export default InputNumber