import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Hello from "./Hello.js"
import Home from './Home.js';
import Posts from "./posts";
import PostDetails from "./PostDetails"
import { postsContext } from './contexts/postsContext.js';
import NotFound from './NotFound.js';


function App() {
  let postsData = [
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
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        <div>
          <Link to="/home">
            <button>Home</button>
          </Link>
          <Link to="hello">
            <button>Hello</button>
          </Link>
          <Link to="/posts">
            <button>Posts</button>
          </Link>

        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path="/postDetails/:postId" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
