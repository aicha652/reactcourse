import { Link } from "react-router-dom";
import { postsContext } from "./contexts/postsContext";
import { useContext } from "react"


export default function Posts() {
    const posts = useContext(postsContext)
    let postsList = posts.map((post) => {
        return(
            <Link key={post.id} to={`/posts/${post.id}`}>
                  <div 
                    style={{backgroundColor: "orange"}}>
                    <h1>{ post.title }</h1>
                  </div>
            </Link>
        )
    })
    return(
        <>
           {postsList}
        </>
    )
}