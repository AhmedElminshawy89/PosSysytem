import React, { useState } from "react";
import Modal from "react-modal";
import img from "../../../data/Img/006-terrace.png";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    // maxWidth: "1000px",
    maxHeight: "100vh",
    overflowY: "auto",
  },
};

const PersonModal = ({ modalIsOpen, closeModal }) => {
  const [selectedTab, setSelectedTab] = useState("groundFloor");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Select Person and Floor Modal"
      ariaHideApp={true}
    >
      <div className="mb-5">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link fs-2 ${
                selectedTab === "groundFloor" ? "active" : ""
              }`}
              onClick={() => handleTabChange("groundFloor")}
            >
              Ground Floor
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link fs-2 ${
                selectedTab === "vipFloor" ? "active" : ""
              }`}
              onClick={() => handleTabChange("vipFloor")}
            >
              VIP Floor
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link fs-2 ${
                selectedTab === "secondFloor" ? "active" : ""
              }`}
              onClick={() => handleTabChange("secondFloor")}
            >
              Second Floor
            </button>
          </li>
        </ul>
      </div>
      {selectedTab === "groundFloor" && (
        <form>
          <div className="grid-person-modal">
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>
          </div>
          {/* <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button> */}
          <button
            type="submit"
            onClick={closeModal}
            className="btn btn-flex btn-primary h-40px fs-7 fw-bold mt-10"
          >
            Save
          </button>
        </form>
      )}
      {selectedTab === "vipFloor" && (
        <form>
          {/* <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button> */}
          <button
            type="submit"
            onClick={closeModal}
            className="btn btn-flex btn-primary h-40px fs-7 fw-bold mt-10"
          >
            Save
          </button>
        </form>
      )}
      {selectedTab === "secondFloor" && (
        <form>
          <div className="grid-person-modal">
          <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center mb-1">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table fs-3"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Table</p>
                      <p className="fs-3">1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Seat</p>
                      <p className="fs-3">2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p className="fs-3">Available</p>
                      <p className="fs-3">2</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <div className="table">
                <table className="table-order">
                  <thead>
                    <th className="text-center fs-3 fw-bold">Order</th>
                    <th className="text-center fs-3 fw-bold">Time</th>
                    <th className="text-center fs-3 fw-bold">Person</th>
                    <th className="text-center fs-3 fw-bold">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" className="text-center no-customer fs-2 fw-solid">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" className="fs-2"/>{" "}
                <p className="btn btn-primary py-2 mt-3">+</p>
              </div>
            </div>
          </div>
          {/* <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button> */}
          <button
            type="submit"
            onClick={closeModal}
            className="btn btn-flex btn-primary h-40px fs-7 fw-bold mt-10"
          >
            Save
          </button>
        </form>
      )}
    </Modal>
  );
};

export default PersonModal;
