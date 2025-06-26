import { Link } from "react-router-dom"

export default function Hello() {
    return(
        <>
          <h1>Hello World!</h1>
          <Link to="/home">
                <div style={{ backgroundColor: "orange", borderRadius: "10px" }}>
                    <h1>Got To Home</h1>
                </div>
          </Link>
        </>
    )
}