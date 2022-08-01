import ToggleMode from "../ui/ToggleMode";
import AddTask from "../tasks/AddTask";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <form className="header__form">
          <div className="header__container">
            <h1 className="header__logo">T O D O</h1>
            <ToggleMode />
          </div>
          <AddTask />
        </form>
      </header>
      <main>{children}</main>
      <footer>
        <p>Drag and drop to reader list</p>
      </footer>
    </>
  );
};

export default Layout;
