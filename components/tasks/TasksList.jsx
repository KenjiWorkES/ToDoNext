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

  const dragEndHandler = (result) => {
    if (!result.destination) {
      return;
    }

    const taskList = reorder(
      ctx.tasksList,
      result.source.index,
      result.destination.index
    );

    ctx.setTaskList(taskList);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
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

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
      <div className="tasks__item tasks__item--controller">
        <p className="tasks__control">{leftItems} items left</p>
        <p className="tasks__control"> Clear Clompleted</p>
      </div>

      <TaskFilter onFilter={filterHandler} list={items} />
    </DragDropContext>
  );
};

export default TaskList;
