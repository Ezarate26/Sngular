import React from "react";
import styles from "./ShowResult.module.css"

const ShowResult = ({result}) => {
return(
    <div className={styles.container}>
    <h3 className={styles.title}>Este es el resultado de la operación:</h3>
    <h3 className={styles.result}>{result}</h3>
    </div>
)
}

export default ShowResult;