import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    result: null,
}

export const calcSlice = createSlice({
    name: "calculation",
    initialState: initialState,
    reducers: {
        add: (currentState, action) => {
            console.log("calling the reducer for action named: sum", currentState);
            const sum = Number(action.payload.firstNumber) + Number(action.payload.secondNumber)
            console.log("the result from the reducer is:", sum,)
            currentState.result = sum
        },
        sub: (currentState, action) => {
            const {firstNumber, secondNumber} = action.payload
            currentState.result = firstNumber- secondNumber
        },
        mul: (currentState, action) => {
            const {firstNumber, secondNumber} = action.payload
            currentState.result = firstNumber * secondNumber
        },
        div: (currentState, action) =>{
            const{firstNumber, secondNumber} = action.payload
            currentState.result = firstNumber / secondNumber
        }

    }
})

export const { add, sub, mul, div } = calcSlice.actions
export default calcSlice.reducer