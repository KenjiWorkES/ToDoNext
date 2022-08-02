import { useState } from "react";

const TaskFilter = ({ onFilter, list }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const allFilterHandler = () => {
    onFilter(list);
    setActiveIndex(0);
  };

  const activeFilterHandler = () => {
    const activeList = list.filter((item) => item.completed === false);
    onFilter(activeList);
    setActiveIndex(1);
  };

  const completedFilterHandler = () => {
    const completedList = list.filter((item) => item.completed === true);
    onFilter(completedList);
    setActiveIndex(2);
  };

  return (
    <ul className="tasks__filter">
      <li
        onClick={allFilterHandler}
        className={`tasks__filterItem ${
          activeIndex === 0 ? "tasks__filterItem--active" : ""
        }`}
      >
        All
      </li>
      <li
        onClick={activeFilterHandler}
        className={`tasks__filterItem ${
          activeIndex === 1 ? "tasks__filterItem--active" : ""
        }`}
      >
        Active
      </li>
      <li
        onClick={completedFilterHandler}
        className={`tasks__filterItem ${
          activeIndex === 2 ? "tasks__filterItem--active" : ""
        }`}
      >
        Completed
      </li>
    </ul>
  );
};

export default TaskFilter;
