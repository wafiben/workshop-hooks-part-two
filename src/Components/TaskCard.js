import React from "react";

const TaskCard = ({task,deleteTask}) => {
    const handleDelete=()=>{
        deleteTask(task.id)
    }
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Task</h5>
        <p className="card-text">
         {task.descreption}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
        <button type="button" class="btn btn-danger" onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
};
export default TaskCard;
