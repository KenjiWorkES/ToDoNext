const ToggleMode = ({ onTheme, mode }) => {
  let toggleButton;

  if (!mode) {
    toggleButton = (
      <button
        type="button"
        className="header__toggle"
        onClick={onTheme.bind(null, true)}
      >
        <img src="/icon-moon.svg" />
      </button>
    );
  }

  if (mode) {
    toggleButton = (
      <button
        type="button"
        className="header__toggle"
        onClick={onTheme.bind(null, false)}
      >
        <img src="/icon-sun.svg" />
      </button>
    );
  }

  return toggleButton;
};

export default ToggleMode;
