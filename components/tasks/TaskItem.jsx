const TaskItem = () => {
  return (
    <li>
      <input id="addCheck" className="task__check" type="checkbox" />
      <label className="task__label" htmlFor="addCheck"></label>
      <p className="task__text">Test Text</p>
    </li>
  );
};

export default TaskItem;
