import { createContext, useState } from "react";

const TasksContext = createContext({
  tasksList: [],
  setTaskList: () => {},
  updateTasksList: () => {},
  updateItem: (id, completed) => {},
  removeItem: (id) => {},
  uncompletedAll: () => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const setTasksHandler = (tasks) => {
    setTasks(tasks);
  };

  const updateTasksHandler = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateItemHandler = (id, completed) => {
    console.log(id);
    const updatedList = tasks.map((item) => {
      if (item._id === id) {
        console.log(item.text);
        item.completed = completed;
        return item;
      } else {
        return item;
      }
    });

    setTasks(updatedList);
  };

  const removeItemHandler = (id) => {
    console.log("Deleted");
    const updatedList = tasks.filter((item) => {
      return item._id !== id;
    });

    setTasks(updatedList);
  };

  /*const uncompletedAllHandler = () => {
    const uncompletedList = tasks.map((task) => {
      return {
        _id: task.id,
        text: task.text,
        completed: false,
      };
    });

    setTasks(uncompletedList);
  };*/

  return (
    <TasksContext.Provider
      value={{
        tasksList: tasks,
        setTaskList: setTasksHandler,
        updateTasksList: updateTasksHandler,
        updateItem: updateItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
