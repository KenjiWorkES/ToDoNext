const TaskItem = ({ item }) => {
  const checkedHandler = async (event) => {
    const taskChecked = {
      id: item.id,
      text: item.text,
      completed: event.target.checked,
    };

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
    </li>
  );
};

export default TaskItem;
