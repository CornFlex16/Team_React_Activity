import { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      checked: false,
      taskName: "Study and review Javascript DOM",
      remarks: "Very Easy"
    },
    {
      id: 2,
      checked: false,
      taskName: "Study react router",
      remarks: "A bit challenging but fun"
    },
    {
      id: 3,
      checked: false,
      taskName: "Disect and Javascript Data Structure and Algorithm",
      remarks: "It was challenging at first"
    }
  ]);

  const handleAdd = (taskName, remarks) => {
    // create a new task object with the provided data
    const newTask = {
      id: tasks.length + 1, // generate a new ID
      checked: false,
      taskName: taskName,
      remarks: remarks
    };
    // update the tasks state by adding the new task to the existing tasks
    setTasks([...tasks, newTask]);
  };

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          checked: !task.checked
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <Header title="My Todo List" />
      <AddTask handleAdd={handleAdd} />
      <Content
        items={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
