import { Link } from "react-router-dom";

let posts = [
    {
        id: 1,
        title: "Post One",
        body: "This is the body of the post 1"
    },
    {
        id: 2,
        title: "Post Two",
        body: "This is the body of the post 2"
    },
    {
        id: 3,
        title: "Post Three",
        body: "This is the body of the post 3"
    }
];


export default function Posts() {
    let postsList = posts.map((post) => {
        return(
            <Link key={post.id} to="/postDetails">
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