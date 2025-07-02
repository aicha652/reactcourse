import './App.css';
import { useState, useReducer } from "react"
import resultReducer from './reducers/resultReducer';

function App() {
  const [firstNumberInput, setFirstNumberInput] = useState()
  const [secondNumberInput, setSecondNumberInput] = useState()
  const [result, setResult] = useState()

  const[result2, dispatch] = useReducer(resultReducer, 10)

  function handleSumClick() {
    //const sum = Number(firstNumberInput) + Number(secondNumberInput)
    //setResult(sum)
    dispatch({
      type: "added",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput,
      }
    })
  }

  function handleSubClick() {
    //const sub = Number(firstNumberInput) - Number(secondNumberInput)
    //setResult(sub)
    dispatch({
      type: "subtracted",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput
      }
    })
  }

  function handleMulClick() {
    //const mul = Number(firstNumberInput) * Number(secondNumberInput)
    //setResult(mul)
    dispatch({
      type: "multiplied",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput
      }
    })
  }

  function handleDivClick() {
    //const div = Number(firstNumberInput) / Number(secondNumberInput)
    //setResult(div)
    dispatch({
      type: "divided",
      payload: {
        firstNumber: firstNumberInput,
        secondNumber: secondNumberInput
      }
    })
  }
  


  return (
    <div className="container">
      <label>First Number</label>
      <input
       value={firstNumberInput}
       onChange={(event) =>{
        setFirstNumberInput(event.target.value)
       }}
       type="text" />

      <label>Second Number</label>
      <input
       value={secondNumberInput}
       onChange={(event) =>{
        setSecondNumberInput(event.target.value)
       }}
       type="text" />
       <div className="operations">
        <button onClick={handleSumClick}>Sum</button>
        <button onClick={handleSubClick}>Substract</button>
        <button onClick={handleMulClick}>Multiply</button>
        <button onClick={handleDivClick}>Divide</button>
        <br/>
        {result}
        <br/>
        {result2}
       </div>
    </div>
  );
}

export default App;
