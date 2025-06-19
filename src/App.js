import './App.css';
import Article from './Article';
import ButtonComponent from './ButtonComponent';
import HeaderComponent from './HeaderComponent';
import PostComponent from './PostComponent';

function App() {
  const tasks = [
    {id: 1, title: "task 1"},
    {id: 2, title: "task 2"},
  ]
  const myTasks = tasks.map((task) => {
    return(
    <div><li key={task.id}>{task.title}</li></div>
  )
});
  return (
    <div className="App">

      <div style={{ background: "red" }}>{myTasks}</div>
      
      {/*
      <HeaderComponent />
      <div className="body">
        <Article name="ahmed" email="ahmed@gmail.com" birthday="1987">
          <p style={{ backgroundColor: "red" }}>hello world</p>
        </Article> 
        <Article name="amine" email="amine@gmail.com" birthday="1999" />
      </div>
      */}
    </div>
  );
}

export default App;
