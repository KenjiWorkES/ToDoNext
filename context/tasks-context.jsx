import { createContext, useState } from "react";

const TasksContext = createContext({
  tasksList: [],
  setTaskList: () => {},
  updateTasksList: () => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const setTasksHandler = (tasks) => {
    setTasks(tasks);
  };

  const updateTasksHandler = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <TasksContext.Provider
      value={{
        tasksList: tasks,
        setTaskList: setTasksHandler,
        updateTasksList: updateTasksHandler,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
