import { useState } from "react";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import img from "../../data/Img/qr1.webp";
import img2 from "../../data/Img/down.png";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import  Select  from 'react-select';
const customStylesSelect = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f9f9f9",
      border: "none",
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
      color: "#fff",
      borderRadius: ".75rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#eee" : "white",
      color: state.isFocused ? "#007bffcc" : "#000",
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    menuPortal: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };
const AlltableQr = () => {
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
  };

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Module List"
            CurrentPage="Home"
            path={"/"}
            TitlePage="QR Module"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
                <div className="d-flex gap-4 flex-xl-row flex-column">
             <div className="card card-flush py-0 flex-row-fluid">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>All Table QR CODE                    </h2>
                  </div>
                </div>
                <div className="card-body pt-0 d-flex flex-wrap gap-6">
                <div className="p-4 w-fit text-center" style={{backgroundColor:"#f9f9f9",borderRadius:'.7rem'}}>
                   <img src={img} alt="" className="w-100px" />
                   <p className="text-gray-800 fs-5 font-bold mt-5">QR Code 1</p>
                    </div>
                    <div className="p-4 w-fit text-center" style={{backgroundColor:"#f9f9f9",borderRadius:'.7rem'}}>
                   <img src={img} alt="" className="w-100px" />
                   <p className="text-gray-800 fs-5 font-bold mt-5">QR Code 2</p>
                    </div>
                </div>
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlltableQr;
