import { useState } from "react";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import Flatpickr from "react-flatpickr";
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
const ApplicationSetting = () => {
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
            MainPage="Application Setting"
            CurrentPage="Home"
            path={"/"}
            TitlePage="Application Setting"
          />
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-fluid"
            >
              <div className="card card-flush py-0 flex-row-fluid">
                <div className="card-header align-items-center py-5 gap-2 gap-md-5">
                  <div className="card-title d-flex flex-column w-full-title">
                    <h2>Application Setting</h2>
                  </div>
                </div>
                <div className="card-body pt-0">
                    <div className="d-flex  gap-5 flex-md-column w-full-title">
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Application Title 
                    <span className="required-field-form-order">*</span>
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Application Title`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Store Name
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Store Name`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Address
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Address`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Email Address
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Email Address`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Phone
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Phone`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Favicon
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Email Address`}
                        className="form-control form-control-solid border-0 ps-6"
                        type="file"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Available On
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Available On`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Logo
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Logo`}
                        className="form-control form-control-solid border-0 ps-6"
                        type="file"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Closing Time
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`AddrClosing Timeess`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Discount Type
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Discount Type`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Discount Rate
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Discount Rate`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Local Service Charge
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Local Service Charge`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Local Service Charge Type
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Local Service Charge Type`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Tourist Service Charge
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`Tourist Service Charge`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Tourist Service Charge Type
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Tourist Service Charge Type`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">VAT Setting(%)
                    </label>
                    <input
                        id="waiter"
                        name="waiter"
                        placeholder={`VAT Setting(%)`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">TIN OR VAT NUM.
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`TIN OR VAT NUM.`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Currency
                    </label>
                    <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "City Bank"}
                                        ,{value: "2", label: "Brak Bank"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Currency`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Min. Delivery Time
                    </label>
                    <input
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Min. Delivery Time`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Language
                    </label>
                    <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "English"}
                                        ,{value: "2", label: "Arabic"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Language`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Date Format
                    </label>
                    <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "yyyy-mm-dd"}
                                        ,{value: "2", label: "dd-mm-yyyy"}
                                        ,{value: "2", label: "mm-dd-yyyy"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Language`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Time Zome
                    </label>
                    <Select
                                    id="thirdPartyOrderID"
                                    name="thirdPartyOrderID"
                                    options={[{value: "1", label: "Africa/Cairo"}
                                        ,{value: "2", label: "Africa/Asmera"}
                                    ]}
                                    isSearchable={true}
                                    placeholder={`Time Zome`}
                                    className="select-form-order-pos"
                                    styles={customStylesSelect}
                                />
                  </div>
                    </div>
                    <div className="d-flex gap-5 flex-md-row flex-column">
                    <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Powered By Text
                    </label>
                    <textarea
                        id="waiter"
                        type="time"
                        name="waiter"
                        placeholder={`Powered By Text`}
                        className="form-control form-control-solid border-0 ps-6"
                      />
                  </div>
                  <div style={{flex:1}} className="d-flex flex-column align-items-start position-relative my-1 booking-reserve">
                    <label htmlFor="" className="mb-2 fs-3 text-black">Footer Text
                    </label>
                    <textarea
                        id="waiter"
                        name="waiter"
                        placeholder={`Footer Text`}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationSetting;
