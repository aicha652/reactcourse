import { Outlet } from "react-router-dom"

export default function PostLayout() {
    return(
        <>
           <div style={{ backgroundColor: "green", width:"100%" }}>
            <h1>Post</h1>
           </div>

           <div>
                 <Outlet />
           </div>
           
           <div style={{ backgroundColor: "green", width:"100%" }}>
            <h1>Post</h1>
           </div>
        </>
    )
}