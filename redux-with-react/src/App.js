import './App.css';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { add, sub, mul, div} from './features/calcs/calcSlice';

function App() {
  const resultState = useSelector((state) => {
    return state.calc.result
  })

  const dispatch = useDispatch()

  console.log(resultState)
  const [firstNumberInput, setFirstNumberInput] = useState()
  const [secondNumberInput, setSecondNumberInput] = useState()
  //const [result, setResult] = useState()


  function handleSumClick() {
    console.log("dispatching the add action from the App.js component")
    dispatch(add({firstNumber: firstNumberInput, secondNumber: secondNumberInput}))
    //const sum = Number(firstNumberInput) + Number(secondNumberInput)
    //setResult(sum)
  }

  function handleSubClick() {
    dispatch(sub({firstNumber: firstNumberInput, secondNumber: secondNumberInput}))
    //const sub = Number(firstNumberInput) - Number(secondNumberInput)
    //setResult(sub)
  }

  function handleMulClick() {
    dispatch(mul({firstNumber: firstNumberInput, secondNumber: secondNumberInput}))
    //const mul = Number(firstNumberInput) * Number(secondNumberInput)
    //setResult(mul)
  }

  function handleDivClick() {
    dispatch(div({firstNumber: firstNumberInput, secondNumber: secondNumberInput}))
    //const div = Number(firstNumberInput) / Number(secondNumberInput)
    //setResult(div)
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
        {resultState}
       </div>
    </div>
  );
}

export default App;