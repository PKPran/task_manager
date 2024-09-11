import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, toggleTask } from "./redux/taskSlice";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    dispatch(addTask(taskName));
    setTaskName("");
  };

  const handleToggleTask = (task) => {
    dispatch(toggleTask(task));
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Task Manager with Redux</h1>
      <input
        type="text"
        // value={taskName}
        // onChange={(e) => setTaskName(e.target.value)}
        className="border p-2 mb-4"
        placeholder="Enter task"
      />
      <button
        // onClick={handleAddTask}
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Add Task
      </button>
      <ul className="mt-4">
        {/* {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{task.name}</span>
            <button
              // onClick={() => handleToggleTask(task)}
              className="bg-green-500 text-white p-1 rounded"
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default App;
