import { useParams } from "react-router-dom";
import { postsContext } from "./contexts/postsContext";
import{ useContext } from "react"

export default function PostDetails(){
    const posts = useContext(postsContext)
    const { postId } = useParams()
    const post = posts.find((p) => {
        return p.id == postId
    })
    console.log(post)
    if(post){
        return (
            <div>
                <h2>Post Details</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
        </div>
    );
    }
    else{
        return(
            <>
               <h2>the post with id: {postId} id not exist</h2>
            </>
        )
    }
}