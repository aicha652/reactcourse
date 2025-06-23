import "./Form.css"

export default function Form() {
    return(
        <div>
            <form className="container"> 
                <h2>Requesting a loan</h2>
                <hr/>

                <label>Name</label>
                <input type="text"/>
                
                <label>Phone Number</label>
                <input type="text"/>
                
                <label>Age</label>
                <input type="text"/>
                
                <label>Are you an employee?</label>
                <input type="checkbox"/>

                <label>Salary</label>
                <select>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}