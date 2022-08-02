import { useEffect } from "react";

import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

const TaskList = ({ items }) => {
  return (
    <>
      <ul className="tasks__list">
        {items.map((item) => {
          return <TaskItem key={item._id} item={item} />;
        })}

        <li className="tasks__item tasks__item--controller">
          <p className="tasks__control">5 items left</p>
          <p className="tasks__control"> Clear Clompleted</p>
        </li>
      </ul>
      <TaskFilter />
    </>
  );
};

export default TaskList;
