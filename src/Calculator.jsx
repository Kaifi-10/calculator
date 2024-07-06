import React, { useState } from 'react'
import styles from './Calculator.module.css'
import {evaluate} from 'mathjs'

function Calculator() {

  const [result, setResult] = useState('')
  const [input, setInput] = useState('')

  const hancleClick = (value) =>{
    setInput(input + value)
  }

  const handleClear = () =>{
    setInput('')
    setResult('')
  }

  const handleCalculate = () =>{
    if(!input) {
      setResult('Error')
      return
    }
    try {
      setResult(evaluate(input))
      console.log(result)
    } catch (error) {
      setResult('Error')
    }
  }

  return (
    <div>
      <div className={styles.display}>

        <h1>React Calculator</h1>
        <input type='text' value={input} readOnly /><br/>
        {result && <div className={styles.result}>{result}</div>}
        <div className={styles.keypad} >

            <button onClick={() => hancleClick("7")}>7</button>
            <button onClick={() => hancleClick("8")}>8</button>
            <button onClick={() => hancleClick("9")}>9</button>
            <button onClick={() => hancleClick("+")}>+</button>
            <button onClick={() => hancleClick("4")}>4</button>
            <button onClick={() => hancleClick("5")}>5</button>
            <button onClick={() => hancleClick("6")}>6</button>
            <button onClick={() => hancleClick("-")}>-</button>
            <button onClick={() => hancleClick("1")}>1</button>
            <button onClick={() => hancleClick("2")}>2</button>
            <button onClick={() => hancleClick("3")}>3</button>
            <button onClick={() => hancleClick("*")}>*</button>
            <button onClick={handleClear}>C</button>
            <button onClick={() => hancleClick("0")}>0</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => hancleClick("/")}>/</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator