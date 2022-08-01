const AddTask = () => {
  return (
    <div className="header__control">
      <input id="addCheck" className="header__check" type="checkbox" />
      <label className="header__label" htmlFor="addCheck"></label>
      <input
        className="header__input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default AddTask;
