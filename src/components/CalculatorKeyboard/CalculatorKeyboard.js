import React, { useState } from "react";
import "./CalculatorKeyboard.scss";
import Keyboard from "./Keyboard/Keyboard";
import keyboardModel from "../../models/keyboardModel";

const CalculatorKeyboard = (props) => {
  const { click, expression, handleResult, mode } = props;

  const handleChangeClick = (value) => {
    switch (value) {
      case "=":
        handleResult(eval(expression));
        break;
      case "AC":
        click("");
        handleResult("");
        break;
      case "*":
      case "-":
      case "+":
      case "/":
        if (
          expression.slice(-1) === "*" ||
          expression.slice(-1) === "-" ||
          expression.slice(-1) === "+" ||
          expression.slice(-1) === "/"
        ) {
          break;
        } else {
          click(expression + value);
        }
        break;

      default:
        click(expression + value);
        break;
    }
  };

  const findSymbol = (symbol) => {
    switch (symbol) {
      case "*":
        return false;
      case "-":
        return false;
      case "+":
        return false;
      case "/":
        return false;
      default:
        return true;
        break;
    }
  };
  const handleColor = (value) => {
    return findSymbol(value) ? "#26fad3" : "#dd3f3f";
  };

  return (
    <div
      className="calculator-keyboard-wrapper"
      style={{
        backgroundColor: `${mode === "dark" ? "#343944" : "#a2a9bf"}`,
        transitionDuration: "0.4s",
      }}
    >
      {keyboardModel.map((value, index) => {
        if (value !== "") {
          return (
            <div
              onClick={() => handleChangeClick(value)}
              key={`container-${index}`}
            >
              <Keyboard
                text={value}
                color={handleColor(value)}
                key={`keyboard-${index}`}
                keyboardMode={mode}
              />
            </div>
          );
        } else {
          return <div style={{ height: "70px", width: "70px" }}></div>;
        }
      })}
    </div>
  );
};

export default CalculatorKeyboard;
