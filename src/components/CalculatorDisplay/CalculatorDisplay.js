import "./CalculatorDisplay.scss";

const CalculatorDisplay = (props) => {
  const { expression, equationResult, mode } = props;
  return (
    <div className="calculator-display-wrapper">
      <div
        className="display-expression"
        style={{
          backgroundColor: `${mode === "dark" ? "#343944" : "#a2a9bf"}`,
          transitionDuration: "0.4s",
        }}
      >
        <p
          style={{
            color: `${mode === "dark" ? "#ffffff" : "#000"}`,
            transitionDuration: "0.4s",
          }}
        >
          {expression}
        </p>
      </div>
      <div className="result-wrapper">
        <p
          style={{
            color: `${mode === "dark" ? "#ffffff" : "#000"}`,
            transitionDuration: "0.4s",
          }}
        >
          {equationResult}
        </p>
        <p
          style={{
            color: `${mode === "dark" ? "#ffffff" : "#000"}`,
            transitionDuration: "0.4s",
          }}
        >
          =
        </p>
      </div>
    </div>
  );
};
export default CalculatorDisplay;
