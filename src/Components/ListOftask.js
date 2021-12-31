import React from 'react'
import TaskCard from "./TaskCard"

 const ListOftask = ({tasks,deleteTask}) => {
    return (
        <div>
            {tasks.map((task)=><TaskCard deleteTask={deleteTask} task={task}/>)}
        </div>
    )
}
export default ListOftask;
