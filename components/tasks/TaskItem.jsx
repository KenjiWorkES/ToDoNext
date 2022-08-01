const TaskItem = () => {
  return (
    <li>
      <input id="addCheck" className="tasks__check" type="checkbox" />
      <label className="tasks__label" htmlFor="addCheck"></label>
      <p className="tasks__text">Test Text</p>
    </li>
  );
};

export default TaskItem;
