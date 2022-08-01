import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <ul className="task__list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ul>
  );
};

export default TaskList;
