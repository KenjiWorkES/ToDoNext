import { useRef, useState } from "react";

const AddTask = () => {
  const checkRef = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  const onEnterHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setEnteredTask("");
      console.log(checkRef.current.checked);
    }
  };

  const onTypeHandler = (event) => {
    console.log(event.target.value);
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
    </div>
  );
};

export default AddTask;
