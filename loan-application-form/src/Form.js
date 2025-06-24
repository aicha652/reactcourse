import ErrorMessage from "./ErrorMessage"
import "./Form.css"
import {useState} from "react"

export default function Form() {
    const [infos, setInfos] = useState({
        name: "",
        phone: "",
        age: "",
        employee: false,
        salary: ""
    })

    const [nameError, setNameError] = useState("")

    const [phoneError, setPhoneError] = useState("")

    const [ageError, setAgeError] = useState("")

    const[successMessage, setSuccessMessage] = useState("")

    function handleCheckboxChange(event) {
        setInfos({...infos, employee: event.target.checked})
    }

    function handleSubmitClick() {
        const isNameValid = /^[a-zA-Z\s]+$/.test(infos.name.trim());
        const isPhoneValid = /^\d{10}$/.test(infos.phone.trim());
        const isAgeValid = !isNaN(infos.age)
        const ageNumber = Number(infos.age)
        if(infos.name && !isNameValid){
            setNameError("Name should contain only letters")
        }
        if(infos.phone && !isPhoneValid){
            setPhoneError("Phone Number should be 10 digits")
        }
        if(!isAgeValid) {
            setAgeError("Age should be a number")
        }
        if(ageNumber <= 18 || ageNumber >= 100){
            setAgeError("Age is not allowed")
        }
        if(isNameValid && isPhoneValid && isAgeValid && ageNumber > 18 && ageNumber < 100) {
            setSuccessMessage("form submitted successfully 🎉")
        }

        setTimeout(() => {
            setSuccessMessage("")
        }, 5000)

        // Hide message after 3 seconds (optional)
        //setTimeout(() => {
        //    setSuccessMessage("");
        //}, 3000);
    }

    //check if all required fields are filled
    const isFormValid = 
      infos.name.trim() !== "" &&
      infos.phone.trim() !== "" &&
      infos.age.trim() !== ""

    return(
        <div>
            <form 
             onSubmit={(event)=>{
                event.preventDefault()
             }}
             className="container"> 
                <h2>Requesting a loan</h2>
                <hr/>

                <label>Name</label>
                <input
                 value={infos.name}
                 onChange={(event) => {
                    setInfos({...infos, name: event.target.value})
                    setNameError("")
                 }}
                 type="text"/>
                 {nameError && <ErrorMessage message={nameError} />}
                
                <label>Phone Number</label>
                <input 
                 value={infos.phone}
                 onChange={(event) => {
                    setInfos({...infos, phone: event.target.value})
                    setPhoneError("")
                 }}
                 type="text"/>
                 {phoneError && <ErrorMessage message={phoneError} />}
                
                <label>Age</label>
                <input 
                 value={infos.age}
                 onChange={(event) => {
                    setInfos({...infos, age: event.target.value})
                    setAgeError("")
                 }}
                 type="text"/>
                 {ageError && <ErrorMessage message={ageError} />}
                
                <label>Are you an employee?</label>
                <input 
                 checked={infos.employee}
                 onChange={handleCheckboxChange}
                 type="checkbox"/>

                <label>Salary</label>
                <select
                 value={infos.salary}
                 onChange={(event) =>{
                    setInfos({...infos, salary: event.target.value})
                 }}
                 >
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000</option>
                </select>

                <button 
                 onClick={handleSubmitClick}
                 disabled={!isFormValid}
                 className={isFormValid? "active-button" : "disabled-button"}
                 type="submit"
                 >Submit</button>
                 {successMessage &&
                  <div className="popup-overlay">
                    <div className="popup-modal">
                        {successMessage}
                    </div>
                  </div>
                  }
            </form>
        </div>
    )
}