import React, { useState } from "react";
import ColorTheme from "../ColorTheme/ColorTheme";
import CalculatorDisplay from "../CalculatorDisplay/CalculatorDisplay";
import CalculatorKeyboard from "../CalculatorKeyboard/CalculatorKeyboard";
import "./calculatorBody.scss";
const CalculatorBody = () => {
  const [displayText, setDisplayText] = useState("");
  const [result, setResult] = useState("");
  const [displayMode, setDisplayMode] = useState("dark");
  return (
    <div
      className="calculator-wrapper"
      style={{
        backgroundColor: `${displayMode === "dark" ? "#22252d" : "#e1e2e5"}`,
        transitionDuration: "0.4s",
      }}
    >
      <div className="calculator-color-theme-wrapper">
        <ColorTheme setmode={setDisplayMode} mode={displayMode} />
      </div>
      <CalculatorDisplay
        expression={displayText}
        equationResult={result}
        mode={displayMode}
      />

      <CalculatorKeyboard
        click={setDisplayText}
        expression={displayText}
        handleResult={setResult}
        mode={displayMode}
      />
    </div>
  );
};
export default CalculatorBody;
