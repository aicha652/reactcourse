import { useState } from "react";

export default function MyForm() {

    const [InputForms, setInputForms] = useState({Name: "", Email: ""})

    return(
        <form
        onSubmit = {(event) =>{
            event.preventDefault();
            console.log(InputForms)
        }
        }
        style={ { paddingTop: "30px" } }>
            <label>Name: </label>
            <input
            value={InputForms.Name}
            onChange={(event) =>{
                setInputForms({...InputForms, Name: event.target.value})
            } }
            />
            <br />
            <br />
            <label>Email: </label>
            <input 
            value={InputForms.Email}
            onChange={(event) => {setInputForms({...InputForms, Email: event.target.value})} }
            />
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}