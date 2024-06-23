import React, { useState } from "react";
import Modal from "react-modal";
import { FaPowerOff } from "react-icons/fa6";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "400px",
    width: "100%",
    padding: "0",
  },
};

const CalculatorModal = ({ isOpen, onRequestClose }) => {
  const [input, setInput] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "CE") {
      setInput(input.slice(0, -1));
    } else if (value === "√") {
      try {
        setInput(Math.sqrt(eval(input)).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "^2") {
      try {
        setInput(Math.pow(eval(input), 2).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "1/x") {
      try {
        setInput((1 / eval(input)).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "%") {
      try {
        setInput((eval(input) / 100).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "%",
    "CE",
    "C",
    "OFF",
    "1/x",
    "^2",
    "√",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Calculator"
    >
      <div className="calculator">
        <input
          type="text"
          value={input}
          readOnly
          className="calculator-input"
        />
        <div className="calculator-buttons">
          {buttons.map((btn) => (
            <button
              key={btn.toString()}
              onClick={() =>
                btn === "OFF" ? onRequestClose() : handleButtonClick(btn)
              }
              className="btn-calculator"
              style={
                btn === "="
                  ? {
                      backgroundColor: "#1b84ff",
                      color: "white",
                      width: "211%",
                    }
                  : [
                      ".",
                      "0",
                      "1",
                      "2",
                      "3",
                      "4",
                      "5",
                      "6",
                      "7",
                      "8",
                      "9",
                    ].includes(btn)
                  ? { backgroundColor: "white" }
                  : {}
              }
            >
              {btn === "OFF" ? <FaPowerOff /> : btn}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CalculatorModal;
