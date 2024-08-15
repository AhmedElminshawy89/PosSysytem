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
const AppSetting = () => {
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
            MainPage="App Setting"
            CurrentPage="Home"
            path={"/"}
            TitlePage="App Setting"
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
                    <h2>App Setting</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex  gap-5 flex-md-column w-full-title">
                    <div className="d-flex gap-5 flex-md-row flex-column w-100">
                    <div style={{flex:1}} className="d-flex flex-column w-100 align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Your Local Host Full URL 
                    <span className="required-field-form-order">*</span>
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Your Local Host Full URL `}
                        className="form-control form-control-solid border-0 ps-6 w-100"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mt-3 fs-3 text-black">Your Online URL
                    <span className="text-white">*</span>
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Your Online URL`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>


                    </div>
                  <div className="d-flex justify-content-end mt-8 gap-5">
                  <button className="btn btn-outline">Reset</button>
                  <button className="btn btn-primary">Save</button>
                  </div>
                </div>
              </div>
             <div className="card card-flush py-0 flex-row-fluid">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>App Ads-ons</h2>
                  </div>
                </div>
                <div className="card-body pt-0 d-flex flex-wrap gap-6">
                <div className="p-4 w-fit text-center" style={{backgroundColor:"#f9f9f9",borderRadius:'.7rem'}}>
                   <img src={img} alt="" className="w-100px" />
                   <p className="text-gray-800 fs-5 font-bold mt-5">Kitchen App QR Scan</p>
                    </div>
                    <div className="p-4 w-fit text-center" style={{backgroundColor:"#f9f9f9",borderRadius:'.7rem'}}>
                   <img src={img} alt="" className="w-100px" />
                   <p className="text-gray-800 fs-5 font-bold mt-5">Waiter App QR Scan</p>
                    </div>
                    <div className="">
                   <p className="text-gray-800 fs-4 font-bold mt-5">Please Download Apps on Playstore</p>
                   <div className="d-flex gap-4 align-items-center">
                   <img src={img2} alt="" className="w-50px" />
                   <p className="text-gray-800 fs-4 font-bold mt-5"> Kitchen App</p>
                   </div>
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

export default AppSetting;
