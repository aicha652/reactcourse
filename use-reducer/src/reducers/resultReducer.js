export default function resultReducer(currentResultState, action){
  const type = action.type
  const {firstNumber, secondNumber} = action.payload
  if(type=="added") {
    return Number(firstNumber) + Number(secondNumber)
  }
  else if(type=="subtracted") {
    return Number(firstNumber) - Number(secondNumber)
  }
  else if(type=="multiplied"){
    return Number(firstNumber) * Number(secondNumber)
  }
  else if(type=="divided"){
    return Number(firstNumber) / Number(secondNumber)
  }
}