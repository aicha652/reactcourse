import { editableInputTypes } from '@testing-library/user-event/dist/utils';
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

  function handleEditClick(id) {
    const editDevices = devices.map((device) =>{
      if(device.id == id){
        let newdevice = {...device, name: device.name + "0"}
        return newdevice
      }
      else {
        return device
      }
    })
    setDevices(editDevices)
  }

  const devicesList = devices.map((device) =>{
    return(
      <li key={device.id}>{device.name}
      <button onClick={() => handleDeleteClick(device.id)}>Delete</button>
      <button onClick={() => handleEditClick(device.id)}>Edit</button></li>
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
