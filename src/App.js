import './App.css';
import ButtonComponent from './ButtonComponent';
import HeaderComponent from './HeaderComponent';
import PostComponent from './PostComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="body">
        <div>
          <PostComponent />
          <PostComponent />
          <PostComponent />
        </div>
        <div>
          <ButtonComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
