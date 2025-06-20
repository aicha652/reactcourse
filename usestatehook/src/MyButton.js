import {useState} from "react";


export default function MyButton() {
    const[name, setName] = useState("ahmed");

    function buttonClicked() {
        if (name == "zaid"){
            setName("ahmed")
        }
        else{
            setName("zaid");
        }
    }


    return(
        <div>
            <button onClick={buttonClicked} >Click Me</button>
            <h1>{ name }</h1>
        </div>
    )
}