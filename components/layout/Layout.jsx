import { useEffect, useState } from "react";

import ToggleMode from "../ui/ToggleMode";
import AddTask from "../tasks/AddTask";

const Layout = ({ children }) => {
  const [darkmode, setDarkMode] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (isFirst) {
      if (localStorage.getItem("mode")) {
        const theme = localStorage.getItem("mode");
        document.body.setAttribute("data-theme", theme);
        if (theme === "light") {
          setDarkMode(false);
        } else {
          setDarkMode(true);
        }
      }
      setIsFirst(false);
    }

    if (!darkmode && !isFirst) {
      document.body.setAttribute("data-theme", "light");
      localStorage.setItem("mode", "light");
    }
    if (darkmode && !isFirst) {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("mode", "dark");
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
