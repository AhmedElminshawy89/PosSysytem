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
    maxWidth: "900px",
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
              className={`nav-link ${
                selectedTab === "groundFloor" ? "active" : ""
              }`}
              onClick={() => handleTabChange("groundFloor")}
            >
              Ground Floor
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                selectedTab === "vipFloor" ? "active" : ""
              }`}
              onClick={() => handleTabChange("vipFloor")}
            >
              VIP Floor
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
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
          <div className="d-flex gap-8 flex-wrap align-items-center justify-content-center">
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button>
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
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button>
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
          <div className="d-flex gap-8 flex-wrap align-items-center justify-content-center">
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex gap-4 align-items-center">
                    <input type="checkbox" id="selectTable" />
                    <label
                      htmlFor="selectTable"
                      className="select-modal-pos-table"
                    >
                      Select This Table
                    </label>
                  </div>
                  <div className="mr-25">
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Table</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Seat</p>
                      <p>2</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mr-25 style-datails-table-modal">
                      <p>Available</p>
                      <p>2</p>
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
                    <th>Order</th>
                    <th>Time</th>
                    <th>Person</th>
                    <th className="pr-14">Action</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="4" class="no-customer">
                        No Customer
                      </td>
                    </tr>{" "}
                  </tbody>
                </table>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <input type="number" placeholder="Person" />{" "}
                <p className="add-customer-odrer-pos person-model-plus">+</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-flex btn-outline btn-color-gray-700 mr-15 btn-active-color-primary bg-body mt-10 h-40px fs-7 fw-bold"
          >
            Close
          </button>
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
