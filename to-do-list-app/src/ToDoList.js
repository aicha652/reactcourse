import "./ToDoList.css";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { MdDone } from "react-icons/md";
import Popup from "./popup";

export default function ToDoList() {
    const[taskInput, setTaskInput] = useState("")
    const[tasks, setTasks] = useState([])
    const[done, setDone] = useState(false)
    const[index, setIndex] = useState(0)

    function handleAddClick() {
        console.log(tasks)
        if(taskInput.trim() !== ""){
            let newTask = {name: taskInput, id: index, isDone: done}
            setTasks([...tasks, newTask])
        }
        setIndex(index + 1)
    }

    function handleDeleteClick(taskId){
        console.log(taskId)
        const filterTasks = tasks.filter(task =>
            task.id !== taskId
        )
        setTasks([...filterTasks])
    }
    
    function handleUpdateClick(taskId) {
        const updateTasks = tasks.map((task) =>{
            if(task.id == taskId){
                <div>
                    {/*<Popup title={task.name}  />*/}
                </div>
            }
        })
    }

    {/*function handleDoneClick(taskId) {
        const tasksDone = tasks.map((task) =>{
            if(task.id == taskId) {
                
            }
        })
    }*/}

    function handleDoneTaskClick(taskId) {
        console.log(tasks)
        const updateDoneTask = tasks.map((task) =>{
            if(task.id == taskId) {
                return {...task, isDone: !task.isDone}
            }
            return task
        })
        setTasks(updateDoneTask)
    }

    const allTasks = tasks.map((task) =>{
        return(
                <div className="card" key={task.id}>
                    <h4>{task.name}</h4>
                    <div className="actions">
                        <AiOutlineDelete
                         onClick={()=>{handleDeleteClick(task.id)}} 
                         style={{borderRadius: "50%", color: "red", 
                                 background: "#fff", border:"1px solid red",
                                 fontSize: "25px"}}
                        />
                        <MdOutlineEdit 
                         onClick={()=>{handleUpdateClick(task.id)}}
                         style={{borderRadius: "50%", color: "blue", 
                                 background: "#fff", border:"1px solid blue",
                                 fontSize: "25px"}}
                        />
                        <MdDone
                         onClick={() => {handleDoneTaskClick(task.id)}}
                         className={task.isDone ? "task-done" : "task-notdone" }
                         />
                    </div>
                </div>)
    })

    return(
        <div className="container">
            <p>مهامي</p>
            <hr />
            <div className="arrayTitles">
                <button className="column">الكل</button>
                <button className="column">منجز</button>
                <button className="column">غير منجز</button>
            </div>
            <div>
                {tasks.length > 0 ? allTasks : <></>}
            </div>
            <div className="bottomList" >
                <button
                 onClick={handleAddClick} 
                >
                    إضافة
                </button>
                <input 
                 type="text" 
                 placeholder="عنوان المهمة"
                 value={taskInput}
                 onChange={(event) =>{
                    setTaskInput(event.target.value)
                 }}
                />
            </div>
        </div>
    )
}