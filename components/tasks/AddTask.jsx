import { useRef, useState, useContext } from "react";
import TasksContext from "../../context/tasks-context";

const AddTask = () => {
  const ctx = useContext(TasksContext);
  const checkRef = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  const onEnterHandler = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const checkedValue = checkRef.current.checked;
      const task = { text: enteredTask, completed: checkedValue };

      const response = await fetch("/api/post-tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      ctx.updateTasksList(data.task);

      setEnteredTask("");
    }
  };

  const addTaskHandler = async (event) => {
    event.preventDefault();
    const checkedValue = checkRef.current.checked;
    const task = { text: enteredTask, completed: checkedValue };

    const response = await fetch("/api/post-tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    ctx.updateTasksList(data.task);

    setEnteredTask("");
  };

  const onTypeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  return (
    <div className="header__control">
      <input
        id="addCheck"
        className="header__check"
        type="checkbox"
        ref={checkRef}
      />
      <label className="header__label" htmlFor="addCheck"></label>
      <input
        onKeyDown={onEnterHandler}
        className="header__input"
        type="text"
        placeholder="Create a new todo..."
        onChange={onTypeHandler}
        value={enteredTask}
      />
      <button className="header__add" onClick={addTaskHandler}>
        <img className="header__icon" src="/icon-add.svg"></img>
      </button>
    </div>
  );
};

export default AddTask;
