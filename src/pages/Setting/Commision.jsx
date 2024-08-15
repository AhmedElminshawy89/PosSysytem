/* eslint-disable react-hooks/rules-of-hooks */
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import AddNewTerminal from "./Modal/AddNewTerminal";
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
const Commssion = () => {
  
  return (
    <>
      <div
        className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
        id="kt_app_main"
      >
        <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex justify-content-between align-items-center bg-white flex-sm-row flex-column">
          <Toolbar
            MainPage="Commission Setting"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Commission"
          />
          <div>
          </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <p className="fs-5 font-bold text-gray-800">Payroll Commission Setting
                    </p>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex  gap-5 flex-md-column w-full-title">
                    <div className="d-flex gap-5 flex-md-row flex-column w-100">
                    <div style={{flex:1}} className="d-flex flex-column w-100 align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Designation
                    </label>
                    <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={[
                    { value: "option1", label: "Chef "},
                    { value: "option1", label: "HRM "},
                ]}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
                styles={customStylesSelect}
              />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mt-3 fs-3 text-black">Commission
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Commission`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>


                    </div>
                  <div className="d-flex justify-content-end mt-8 gap-5">
                  <button className="btn btn-primary">Save</button>
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

export default Commssion;
