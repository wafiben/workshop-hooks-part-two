import React, { useState, useEffect } from "react";
import "./App.css";
import AddTask from './Components/AddTask'
import ListOftask from "./Components/ListOftask"
function App() {
  const ListOfTasks = [
    {id:0, descreption: "go the restaurant", done: false },
    {id:1, descreption: "gplaying football", done: false },
  ];
 const [tasks,setTasks]=useState(ListOfTasks)
 const add=(task)=>{
   setTasks([...tasks,task])
 }
 const deleteTask=(id)=>{
   setTasks(tasks.filter((task)=>task.id!=id))
 }
  return (
    <div className="App">
      <AddTask addtask={add}/>
     {tasks.length>0 ?<ListOftask deleteTask={deleteTask} tasks={tasks}/>:'no task to show'} 
    </div>
  );
}

export default App;
