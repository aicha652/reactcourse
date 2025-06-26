import { useParams } from "react-router-dom";

export default function PostDetails({ title, body }){
    const {postId} = useParams()
    console.log(postId)
    return (
        <div>
            <h2>Post Details</h2>
              <h1>{title}</h1>
              <p>{body}</p>
        </div>
    );
}