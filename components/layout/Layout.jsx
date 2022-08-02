import { useEffect, useState } from "react";

import ToggleMode from "../ui/ToggleMode";
import AddTask from "../tasks/AddTask";

const Layout = ({ children }) => {
  const [darkmode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!darkmode) {
      document.body.setAttribute("data-theme", "light");
    }
    if (darkmode) {
      document.body.setAttribute("data-theme", "dark");
    }
  }, [darkmode]);

  const changeThemeHandler = (theme) => {
    setDarkMode(theme);
  };

  return (
    <>
      <header className="header">
        <form className="header__form">
          <div className="header__container">
            <h1 className="header__logo">T O D O</h1>
            <ToggleMode onTheme={changeThemeHandler} mode={darkmode} />
          </div>
          <AddTask />
        </form>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p className="footer__info">Drag and drop to reader list</p>
      </footer>
    </>
  );
};

export default Layout;
