import "./Keyboard.scss";

const Keyboard = (props) => {
  const { text, color, keyboardMode } = props;
  return (
    <div
      className="keyboard "
      style={{
        color: color,
        backgroundColor: `${keyboardMode === "dark" ? "#272a32" : "#f1f1f1"}`,
        transitionDuration: "0.4s",
      }}
    >
      {text}
    </div>
  );
};
export default Keyboard;
