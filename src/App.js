import './App.css';
import Article from './Article';
import ButtonComponent from './ButtonComponent';
import HeaderComponent from './HeaderComponent';
import PostComponent from './PostComponent';

function App() {
  const tasks = [
    {id: 1, name: "task1"},
    {id: 2, name: "task2"},
  ]

  const listTasks = tasks.map((task) =>{
    return(
      <li key={task.id} >{ task.name }</li>
    )
  })
  return (
    <div className="App">
      <div>{ listTasks }</div>
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
