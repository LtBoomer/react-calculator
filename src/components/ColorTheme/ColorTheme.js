import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./colorTheme.scss";
const ColorTheme = (props) => {
  const { setmode, mode } = props;
  return (
    <div
      className="color-theme-wrapper"
      style={{
        backgroundColor: `${mode === "dark" ? "#2b2f38" : "#a2a9bf"}`,
        transitionDuration: "0.4s",
      }}
    >
      <MdOutlineLightMode
        fontSize="30px"
        cursor="pointer"
        color={mode === "dark" ? "#c8c9cb" : "black"}
        onClick={() => {
          setmode("light");
        }}
        style={{
          width: `${mode === "dark" ? "20px" : "40px"}`,
          transitionDuration: "0.4s",
        }}
      />
      <MdDarkMode
        fontSize="30px"
        cursor="pointer"
        color={mode === "dark" ? "#c8c9cb" : "black"}
        onClick={() => {
          setmode("dark");
        }}
        style={{
          width: `${mode === "dark" ? "40px" : "20px"}`,
          transitionDuration: "0.4s",
        }}
      />
    </div>
  );
};
export default ColorTheme;
