import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <>
           <h1>404 (Not Found)</h1>
           <h3>The url you visited is not defined</h3>
           <Link to="/home">
                  <button>Go Back To Home</button>
           </Link>
        </>
    )
}