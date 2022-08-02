const TaskItem = () => {
  return (
    <li className="tasks__item">
      <input id="id" className="tasks__check" type="checkbox" />
      <label className="tasks__label" htmlFor="id"></label>
      <p className="tasks__text">Test Text</p>
    </li>
  );
};

export default TaskItem;
