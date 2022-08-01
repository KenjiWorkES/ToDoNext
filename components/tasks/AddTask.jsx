const AddTask = () => {
  return (
    <div className="header__control">
      <input className="header__check" type="checkbox" />
      <input
        className="header__input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default AddTask;
