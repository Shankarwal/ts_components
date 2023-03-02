import { useTheme } from "./ThemeContext";

const Box = () => {
  const { themes, setLight, light } = useTheme();
  let styles;

  if (light) {
    styles = { ...themes.primary };
  } else {
    styles = { ...themes.secondary };
  }

  const toggleTheme = () => {
    setLight((prevTheme) => !prevTheme);
  };

  return (
    <div
      style={{
        ...styles,
        padding: "1rem",
        display: "inline-block",
        borderRadius: "9px",
      }}
      className="theme-box"
    >
      <p>Theme Box</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Box;
