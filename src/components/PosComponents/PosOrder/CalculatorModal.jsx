import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineCloseSquare } from "react-icons/ai";

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
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const [resultShown, setResultShown] = useState(false);
  const [lastResult, setLastResult] = useState(null);
  const [darkTheme, setDarkTheme] = useState(false); // State for theme toggle

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const result = eval(
          input.replace("x", "*").replace("÷", "/")
        ).toString();
        setHistory(input);
        setInput("=" + " " + result);
        setLastResult(result);
        setResultShown(true);
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
      setHistory("");
      setResultShown(false);
      setLastResult(null);
    } else if (value === "CE") {
      setInput(input.slice(0, -1));
    } else {
      if (resultShown) {
        setInput(lastResult + value);
        setResultShown(false);
      } else {
        setInput((prev) => prev + value);
      }
    }
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const buttons = [
    "+",
    "-",
    "x",
    "÷",
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "",
    "1",
    "2",
    "3",
    "=",
    ".",
    "0",
    "CE",
  ];

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    // Implement logic to change theme here
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Calculator"
    >
      <div className={`calculator ${darkTheme ? 'dark-theme' : ''}`}>
        <div className="header-calculator-modal">
          <div className="header-calculator-modal-top d-flex justify-content-between align-items-center">
            <p>Calculator</p>
            <label htmlFor="theme" className="theme">
              <span className="theme__toggle-wrap">
                <input
                  id="theme"
                  className="theme__toggle"
                  type="checkbox"
                  role="switch"
                  name="theme"
                  value="dark"
                  checked={darkTheme}
                  onChange={toggleTheme}
                />
                <span className="theme__fill"></span>
                <span className="theme__icon">
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                  <span className="theme__icon-part"></span>
                </span>
              </span>
            </label>
          </div>
          {history && <div className="calculator-history">{history}</div>}
          <input
            type="text"
            value={formatNumber(input)}
            readOnly
            className="calculator-input"
          />
        </div>
        <div className="calculator-buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() =>
                btn === "OFF" ? onRequestClose() : handleButtonClick(btn)
              }
              className={`btn-calculator 
              ${btn === "" ? "bg-white cursor-default" : ""}
              ${index < 4 ? "btn-calculator-blue" : ""}`}
              style={
                btn === "="
                  ? {
                      backgroundColor: "#1b84ff",
                      color: "white",
                      height: "auto",
                      borderRadius: "40px",
                      gridRow: "span 2",
                    }
                  : btn === "C"
                  ? {
                      backgroundColor: "red",
                      color: "white",
                    }
                  : {}
              }
            >
              {btn === "CE" ? <AiOutlineCloseSquare /> : btn}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CalculatorModal;
