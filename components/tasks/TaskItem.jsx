const TaskItem = ({ item }) => {
  return (
    <li className="tasks__item">
      <input
        id={item._id}
        className="tasks__check"
        type="checkbox"
        defaultChecked={item.completed}
      />
      <label className="tasks__label" htmlFor={item._id}></label>
      <p className="tasks__text">{item.text}</p>
    </li>
  );
};

export default TaskItem;
