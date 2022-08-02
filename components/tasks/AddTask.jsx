const AddTask = () => {
  const onEnterHandler = (event) => {
    if (event.key === "Enter") {
      console.log("Press Enter");
      event.preventDefault();
    }
  };

  return (
    <div className="header__control">
      <input id="addCheck" className="header__check" type="checkbox" />
      <label className="header__label" htmlFor="addCheck"></label>
      <input
        onKeyDown={onEnterHandler}
        className="header__input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default AddTask;
