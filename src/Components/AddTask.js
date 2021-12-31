import React, { useState } from "react";

const AddTask = ({ addtask }) => {
  const [task, setTask] = useState({
    id: Math.floor(Math.random() * 10000) + 1,
    descreption: " ",
    done: false,
  });
  const handleChange = (event) => {
    setTask({ ...task,id:Math.floor(Math.random()*10000)+1, descreption: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addtask(task);
    setTask({ descreption: " ", done: false });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label for="descreption" className="form-label">
          Task
        </label>
        <input
          type="text"
          className="form-control"
          id="descreption"
          onChange={handleChange}
          value={task.descreption}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default AddTask;
