import { useState } from "react";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import img from "../../data/Img/qr1.webp";
import img2 from "../../data/Img/down.png";
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import  Select  from 'react-select';
import VerifyAccount from "./Modal/VerifyAccount";
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
const FactoryReset = () => {
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
};
const [modalDetailsOpen, setModalDetailsIsOpen] = useState(false);

  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
          <Toolbar
            MainPage="Factory Reset"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Setting"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
            <div className="card card-flush py-0 flex-row-fluid">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                  </div>
                </div>
                <div className="card-body pt-0">
              <p className="fs-4 text-gray-600">
              Note: Strongly recommended to backup your SOURCE file and DATABASE before resetting because all transactional data will be cleared after running the factory reset.
              </p>
              <button className="btn btn-primary"
              onClick={()=>setModalDetailsIsOpen(true)}>Do You Want to Proceed?</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VerifyAccount closeModal={() => setModalDetailsIsOpen(false)}
          modalIsOpen={modalDetailsOpen} />
    </>
  );
};

export default FactoryReset;
