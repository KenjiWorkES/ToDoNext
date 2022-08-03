import TasksContext from "../../context/tasks-context";
import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";

const TaskItem = ({ item, dragIndex }) => {
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

  const removeItemHandler = async () => {
    const response = await fetch("/api/delete-tasks", {
      method: "POST",
      body: JSON.stringify({ text: item.text }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    ctx.removeItem(item._id);

    const data = await response.json();
    console.log(data);
  };

  return (
    <Draggable draggableId={item._id} index={dragIndex}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          className="tasks__item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            id={item._id}
            className="tasks__check"
            type="checkbox"
            defaultChecked={item.completed}
            onChange={checkedHandler}
          />
          <label className="tasks__label" htmlFor={item._id}></label>
          <p className="tasks__text">{item.text}</p>
          <button onClick={removeItemHandler} className="tasks__delete">
            <img src="/icon-cross.svg" alt="Close Button" />
          </button>
        </li>
      )}
    </Draggable>
  );
};

export default TaskItem;
