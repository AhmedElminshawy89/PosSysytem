import React, { useState, useRef } from "react";
import {
  AiOutlineClose,
  AiOutlineFullscreen,
  AiOutlineMinus,
  AiOutlinePushpin,
} from "react-icons/ai";
import { FaEdit, FaSave } from "react-icons/fa";
import Draggable from "react-draggable";
import Toolbar from "../Global/ToolBar/Toolbar";
import { IoMoveSharp } from "react-icons/io5";
import { FaUpload } from "react-icons/fa";
import styled from "styled-components";
import style from "./SoundSetting.module.css";
import classes from "../../styles/global.module.css";

const UploadBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border: 2px dashed #1b84ff;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #eee;
    border-color: #1b84ff;
  }
`;

const UploadIcon = styled(FaUpload)`
  color: #1b84ff;
  font-size: 50px;
`;

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
  const [isDragging, setIsDragging] = useState(false); // Define isDragging state

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      playUploadSound();
    }
  };

  const playUploadSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleToggleCardBody = () => {
    setIsCardBodyVisible(!isCardBodyVisible);
  };

  const handleDragStart = () => {
    setIsDragging(true); // Set isDragging to true
  };

  const handleDragStop = (e, data) => {
    setIsDragging(false); // Set isDragging to false
    if (!isPinned) {
      setPosition({ x: data.x, y: data.y });
    }
  };

  const handlePin = () => {
    setIsPinned(!isPinned);
    if (!isPinned) {
      setOriginalPosition(position);
      setPosition({ x: 0, y: 0 });
    } else {
      setPosition(originalPosition);
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
                  <div className="handle d-flex justify-content-between align-items-center flex-sm-row flex-column mb-4">
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
                        <AiOutlineClose title="Close"/>
                      </button>
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handleToggleFullScreen}
                      >
                        <AiOutlineFullscreen title="Fullscreen"/>
                      </button>
                      <button
                        className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                        onClick={handleToggleCardBody}
                      >
                        <AiOutlineMinus title="Minimize"/>
                      </button>
                      {isDragging ? (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                          onClick={handlePin}
                        >
                          <AiOutlinePushpin title="Unpin"/>
                        </button>
                      ) : (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px fw-bold fs-2"
                          onClick={handlePin}
                        >
                          <IoMoveSharp title="Pin"/>
                        </button>
                      )}
                      {!editMode ? (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px"
                          onClick={handleEditTitle}
                        >
                          <FaEdit title="Edit"/>
                        </button>
                      ) : (
                        <button
                          className="btn btn-icon btn-light btn-hover-primary me-3 w-40px h-40px "
                          onClick={handleSaveTitle}
                        >
                          <FaSave title="Save"/>
                        </button>
                      )}
                    </div>
                  </div>
                  <div
                    className={`card-body d-flex justify-content-center flex-column ${
                      isCardBodyVisible
                        ? style.showCardBody
                        : style.hiddenCardBody
                    }`}
                  >
                    <div className="d-flex justify-content-center"> 
                    <UploadBoxContainer>
                      <label
                        htmlFor="file-upload"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <div className="d-flex align-items-center gap-4 flex-column">
                        <UploadIcon />
                        <p className="fs-4 fw-bold">Upload Notification Sound</p>
                        </div>
                        <input
                          id="file-upload"
                          type="file"
                          style={{ display: "none" }}
                          onChange={handleFileUpload}
                        />
                      </label>
                      <audio ref={audioRef} src="/path/to/upload-sound.mp3" />
                    </UploadBoxContainer>
                    </div>
                    <div className="d-flex justify-content-end">
<button className="btn btn-primary">Save</button>
                    </div>
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
