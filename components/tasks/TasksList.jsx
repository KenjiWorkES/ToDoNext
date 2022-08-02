import { useState, useContext, useEffect } from "react";
import TasksContext from "../../context/tasks-context";

import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";

const TaskList = ({ items }) => {
  const ctx = useContext(TasksContext);
  const listItems = ctx.tasksList;

  useEffect(() => {
    if (items) {
      ctx.setTaskList(items);
    }
  }, []);

  const filterHandler = (filteredList) => {
    ctx.setTaskList(filteredList);
  };

  let leftItems = 0;

  listItems.map((item) => {
    if (!item.completed) {
      leftItems++;
    }
  });

  return (
    <>
      <ul className="tasks__list">
        {listItems.map((item) => {
          return <TaskItem key={item._id} item={item} />;
        })}

        <li className="tasks__item tasks__item--controller">
          <p className="tasks__control">{leftItems} items left</p>
          <p className="tasks__control"> Clear Clompleted</p>
        </li>
      </ul>
      <TaskFilter onFilter={filterHandler} list={items} />
    </>
  );
};

export default TaskList;
