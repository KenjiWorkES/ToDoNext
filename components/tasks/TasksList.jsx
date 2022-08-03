import { useContext, useEffect } from "react";
import TasksContext from "../../context/tasks-context";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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
    <DragDropContext>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            className="tasks__list"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {listItems.map((item, index) => {
              return <TaskItem key={item._id} dragIndex={index} item={item} />;
            })}
            <li className="tasks__item tasks__item--controller">
              <p className="tasks__control">{leftItems} items left</p>
              <p className="tasks__control"> Clear Clompleted</p>
            </li>
            {provided.placeholder}
          </ul>
        )}
      </Droppable>

      <TaskFilter onFilter={filterHandler} list={items} />
    </DragDropContext>
  );
};

export default TaskList;
