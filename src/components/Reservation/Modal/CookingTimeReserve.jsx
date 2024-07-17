import React, { useState, useRef, useEffect } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const CookingTimeInput = () => {
  const [showChooseTime, setShowChooseTime] = useState(false);
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");

  const boxRef = useRef(null);

  const handleChooseTime = () => {
    setShowChooseTime(!showChooseTime);
  };

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShowChooseTime(false);
    }
  };

  const handleNowButtonClick = () => {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    setSelectedHour(hour);
    setSelectedMinute(minute);
  };

  const handleHourChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (!isNaN(value) && parseInt(value) >= 0) {
      setSelectedHour(value);
    }
  };

  const handleMinuteChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    if (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) < 60) {
      setSelectedMinute(value);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useHotkeys('Alt + K' , ()=>setShowChooseTime(true))

  return (
    <div className="w-full-title">
      <input
        readOnly
        type="text"
        placeholder="00:00:00"
        value={`${selectedHour||0}:${selectedMinute||0}`}
        className="form-control form-control-solid border-0 ps-4"
        onClick={handleChooseTime}
        style={{borderRadius:'.75rem'}}
      />
      <div ref={boxRef} className={`box-choose-time-reserve box-choose-time ${showChooseTime ? "" : "d-none"}`}>
        <h4>Choose Time</h4>
        <div>
          <label htmlFor="time">Hour</label>
          <input
            type="number"
            placeholder="00"
            className="select-form-order-pos input-form-order"
            value={selectedHour}
            onChange={handleHourChange}
          />
        </div>
        <div>
          <label htmlFor="time">Minute</label>
          <input
            type="number"
            placeholder="00"
            className="select-form-order-pos input-form-order"
            value={selectedMinute}
            onChange={handleMinuteChange}
          />
        </div>
        <div className="btn-cooking-time">
          <button className="btn btn-primary" onClick={handleNowButtonClick}>Now</button>
          <button className="btn btn-primary" onClick={() => setShowChooseTime(false)}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default CookingTimeInput;
