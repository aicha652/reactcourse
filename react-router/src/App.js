import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Hello from "./Hello.js"
import Home from './Home.js';
import Posts from "./posts";
import PostDetails from "./PostDetails"

function App() {
  return (
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
      </Routes>
    </div>
  );
}

export default App;
