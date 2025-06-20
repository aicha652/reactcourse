import {useState} from "react";

export default function MyInput() {
    const [inputValue, setInputValue] = useState("");

    function InputChange(event) {
        setInputValue(event.target.value)
    }

    return(
        <div>
            <label>Enter your Name: </label>
            <input value={inputValue}  onChange={InputChange} />
        </div>
    )

}