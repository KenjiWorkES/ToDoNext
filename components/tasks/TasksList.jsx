import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <ul className="tasks__list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TaskList;
