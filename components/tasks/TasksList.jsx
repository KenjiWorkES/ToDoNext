import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <>
      <ul className="tasks__list">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <li className="tasks__item tasks__item--controller">
          <p className="tasks__control">5 items left</p>
          <p className="tasks__control"> Clear Clompleted</p>
        </li>
      </ul>
    </>
  );
};

export default TaskList;
