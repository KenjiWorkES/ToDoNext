import ToggleMode from "../ui/ToggleMode";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>T O D O</h1>
        <ToggleMode />
      </header>
      <main>{children}</main>
      <footer>
        <p>Drag and drop to reader list</p>
      </footer>
    </>
  );
};
