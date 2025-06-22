import './App.css';
import {useState} from "react";


let nextId = 4
function App() {
  

  const [devices, setDevices] = useState([
    {id : 0, name:"mac"},
    {id: 1, name:"dell"},
    {id: 2, name: "lenovo"},
    {id: 3, name: "hp"}
  ])

  const [deviceInput, setDeviceInput] = useState("")


  function handleDeleteClick(id) {
    const newDevices=devices.filter((device) => device.id !== id)
    setDevices(newDevices)
  }

  const devicesList = devices.map((device) =>{
    return(
      <li key={device.id}>{device.name}<button onClick={() => handleDeleteClick(device.id)}>Delete</button></li>
    )
  })

  function handleAddClick() {
    setDevices([...devices, {id: nextId , name: deviceInput}])
    nextId = nextId + 1
    console.log(devices)
  }

  return (
    <div className="App">
      {devicesList}
      <div>
        <input 
         value={deviceInput} 
         onChange={(event)=>{setDeviceInput(event.target.value)}} 
         type="text" />
        <button onClick={handleAddClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
