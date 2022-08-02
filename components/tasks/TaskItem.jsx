import TasksContext from "../../context/tasks-context";
import { useContext } from "react";

const TaskItem = ({ item }) => {
  const ctx = useContext(TasksContext);

  const checkedHandler = async (event) => {
    const taskChecked = {
      id: item._id,
      text: item.text,
      completed: event.target.checked,
    };

    ctx.updateItem(item._id, event.target.checked);

    const response = await fetch("/api/update-tasks", {
      method: "POST",
      body: JSON.stringify(taskChecked),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(event.target.id);
  };

  return (
    <li className="tasks__item">
      <input
        id={item._id}
        className="tasks__check"
        type="checkbox"
        defaultChecked={item.completed}
        onChange={checkedHandler}
      />
      <label className="tasks__label" htmlFor={item._id}></label>
      <p className="tasks__text">{item.text}</p>
      <button className="tasks__delete">
        <img src="/icon-cross.svg" alt="Close Button" />
      </button>
    </li>
  );
};

export default TaskItem;
