import React, { useState } from "react";

const AddTask = ({ handleAdd }) => {
  const [taskName, setTaskName] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskName) return; // if taskName is empty, do nothing
    handleAdd(taskName, remarks); // call handleAdd function from the parent component
    setTaskName(""); // clear the input field
    setRemarks(""); // clear the textarea field
  };

  return (
    <form onSubmit={handleSubmit} className="container my-3">
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          className="form-control"
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="remarks" className="form-label">
          Remarks
        </label>
        <textarea
          id="remarks"
          className="form-control"
          rows="3"
          value={remarks}
          onChange={(event) => setRemarks(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
