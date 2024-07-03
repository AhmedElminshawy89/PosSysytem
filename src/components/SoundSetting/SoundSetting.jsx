import React, { useState, useRef, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineMinus,
  AiOutlinePushpin,
} from "react-icons/ai";
import { FaEdit, FaSave } from "react-icons/fa";
import Draggable from "react-draggable";
import classes from "../../styles/global.module.css";
import style from "./SoundSetting.module.css";
import Toolbar from "../Global/ToolBar/Toolbar";
import { IoMoveSharp } from "react-icons/io5";

const SoundSetting = () => {
  const [isBoxVisible, setIsBoxVisible] = useState(true);
  const [pageTitle, setPageTitle] = useState("Sound Setting");
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(pageTitle);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const [isCardBodyVisible, setIsCardBodyVisible] = useState(true);
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [audioSrc, setAudioSrc] = useState(null);
  const audioRef = useRef(null);

  const handleEditTitle = () => {
    setEditMode(true);
  };

  const handleSaveTitle = () => {
    setPageTitle(editedTitle);
    setEditMode(false);
  };

  const handleCloseBox = () => {
    setIsBoxVisible(false);
  };

  const handleInputChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (cardRef.current) {
      cardRef.current.classList.toggle(style.fullscreenCard);
    }
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAudioSrc(fileURL);
    }
  };

  const handleToggleCardBody = () => {
    setIsCardBodyVisible(!isCardBodyVisible);
  };
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };
  
  const handleDragStop = (e, data) => {
    setIsDragging(false);
    if (!isPinned) {
      setPosition({ x: data.x, y: data.y });
    }
  };
  
  const handlePin = () => {
    setIsPinned(!isPinned);
    if (!isPinned) {
      setOriginalPosition(position); // Save current position when pinned
      setPosition({ x: 0, y: 0 }); // Reset position to allow free dragging
    } else {
      setPosition(originalPosition); // Restore original position when unpinned
    }
  };
  
  
  return (
    <div
      className={`app-main flex-column flex-row-fluid" id="kt_app_main ${classes.mainApp}`}
    >
      <div className={`d-flex flex-column flex-column-fluid`}>
        <Toolbar
          MainPage="Sound Setting"
          CurrentPage="Home"
          path={"/"}
          TitlePage="Sound Setting"
        />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-fluid"
          >
            {isBoxVisible && (
              <Draggable
              position={position}
              onStart={handleDragStart}
              onStop={handleDragStop}
              handle=".handle"
              disabled={isPinned}
              >
                <div
                  className={`card p-8 ${
                    isFullScreen ? style.fullscreenCard : ""
                  } ${isPinned ? "pinned-card" : ""} ${
                    isCardBodyVisible
                      ? style.autoCardBody
                      : style.minimizedCardBody
                  }`}
                  ref={cardRef}
                >
                  <div className="handle d-flex justify-content-between align-items-center mb-4">
                    <div>
                      {editMode ? (
                        <input
                          type="text"
                          className="form-control fs-1 fw-semibold"
                          value={editedTitle}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="fs-1 fw-semibold">{pageTitle}</p>
                      )}
                    </div>
                    <div className="d-flex flex-row-reverse">
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handleCloseBox}
                      >
                        <AiOutlineClose />
                      </button>
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handleToggleFullScreen}
                      >
                        <AiOutlineFullscreen />
                      </button>
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handleToggleCardBody}
                      >
                        <AiOutlineMinus />
                      </button>
                      {isDragging?(
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handlePin}
                      >
                        <AiOutlinePushpin />
                      </button>
                      ):(
                        <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handlePin}
                      >
                        <IoMoveSharp />
                      </button>
                      )}
                      {!editMode ? (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px"
                          onClick={handleEditTitle}
                        >
                          <FaEdit />
                        </button>
                      ) : (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px "
                          onClick={handleSaveTitle}
                        >
                          <FaSave />
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    className={`card-body ${
                      isCardBodyVisible
                        ? style.showCardBody
                        : style.hiddenCardBody
                    }`}
                  >
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={handleFileChange}
                    />
                    {audioSrc && (
                      <audio controls ref={audioRef} src={audioSrc}>
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                </div>
              </Draggable>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundSetting;
