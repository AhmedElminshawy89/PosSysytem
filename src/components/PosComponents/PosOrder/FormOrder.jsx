import React, { useState } from "react";
import Select from "react-select";
import CustomerModal from "./AddCustomer";
import PersonModal from "./PersonModal";

const FormOrder = () => {
  const [customerType, setCustomerType] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPersonIsOpen, setModalPersonIsOpen] = useState(false);

  const customerNameOptions = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
  ];

  const serviceChargeTypeOptions = [
    { value: "None", label: "None" },
    { value: "Local", label: "Local" },
    { value: "Tourist", label: "Tourist" },
  ];

  const customerTypeOptions = [
    { value: "Dine In", label: "Dine In" },
    { value: "Online Customer", label: "Online Customer" },
    { value: "Third Party Platform", label: "Third Party Platform" },
    { value: "Take Away / Pickup", label: "Take Away / Pickup" },
    { value: "QR Customer", label: "QR Customer" },
  ];

  const deliveryCompanyOptions = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
  ];

  const thirdPartyOrderOptions = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
  ];

  const TableOption = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "G8-B", label: "G8-B" },
    { value: "4", label: "4" },
    { value: "G8-A", label: "G8-A" },
    { value: "G8-C", label: "G8-C" },
  ];

  const handleCustomerTypeChange = (selectedOption) => {
    setCustomerType(selectedOption);
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openModalPerson = () => setModalPersonIsOpen(true);
  const closeModalPerson = () => setModalPersonIsOpen(false);

  return (
    <>
      <form action="" className="form-order">
        <div className="d-flex gap-md-8 flex-column flex-md-row w-full">
          <div className="form-group-form-order">
            <label htmlFor="customerName" className="form-label">
              Customer Name
            </label>
            <div className="d-flex gap-2">
              <Select
                id="customerName"
                name="customerName"
                options={customerNameOptions}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos width-select-form-order-pos"
              />
              <p className="add-customer-odrer-pos" onClick={openModal}>+</p>
            </div>
          </div>
          <div className="form-group-form-order">
            <label htmlFor="serviceChargeType" className="form-label">
              Service Charge Type
            </label>
            <Select
              id="serviceChargeType"
              name="serviceChargeType"
              options={serviceChargeTypeOptions}
              isSearchable={true}
              placeholder={`Select...`}
              className="select-form-order-pos"
            />
          </div>
        </div>
        <div className="d-flex gap-md-16 flex-column flex-md-row">
          <div className="form-group-form-order">
            <label htmlFor="customerType" className="form-label">
              Customer Type
            </label>
            <Select
              id="customerType"
              name="customerType"
              options={customerTypeOptions}
              isSearchable={true}
              placeholder={`Select...`}
              className="select-form-order-pos"
              onChange={handleCustomerTypeChange}
            />
          </div>
        </div>
        <div className="d-flex gap-md-16 flex-column flex-md-row">
          {customerType && customerType.value === "Third Party Platform" && (
            <div className="form-group-form-order">
              <label htmlFor="thirdPartyOrderID" className="form-label">
                Third-party Order ID
              </label>
              <Select
                id="thirdPartyOrderID"
                name="thirdPartyOrderID"
                options={thirdPartyOrderOptions}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
              />
            </div>
          )}
          {customerType && customerType.value === "Third Party Platform" && (
            <div className="form-group-form-order">
              <label htmlFor="deliveryCompany" className="form-label">
                Delivery Company
              </label>
              <Select
                id="deliveryCompany"
                name="deliveryCompany"
                options={deliveryCompanyOptions}
                isSearchable={true}
                placeholder={`Select...`}
                className="select-form-order-pos"
              />
            </div>
          )}
        </div>
        <div>
          {(customerType && (customerType.value === "Dine In" || customerType.value === "QR Customer")) && (
            <>
            <div className="d-flex gap-md-16 flex-column flex-md-row">
              <div className="form-group-form-order">
                <label htmlFor="waiter" className="form-label">
                  Waiter
                </label>
                <div className="d-flex width-full-minmize">
                  <Select
                    id="waiter"
                    name="waiter"
                    options={thirdPartyOrderOptions}
                    isSearchable={true}
                    placeholder={`Select...`}
                    className="select-form-order-pos"
                  />
                  <p className="add-customer-odrer-pos-person">Person</p>
                </div>
              </div>
              <div className="form-group-form-order">
                <label htmlFor="table" className="form-label">
                  Table
                </label>
                <Select
                  id="table"
                  name="table"
                  options={TableOption}
                  isSearchable={true}
                  placeholder={`Select...`}
                  className="select-form-order-pos"
                />
              </div>
            </div>
            <div className="d-flex gap-md-16 flex-column flex-md-row">
              <div className="form-group-form-order">
                <label htmlFor="cookingTime" className="form-label">
                  Cooking Time
                </label>
                <br />
                <input
                  type="time"
                  className="select-form-order-pos input-form-order"
                />
              </div>
            </div>
            </>
          )}
          {(customerType && (customerType.value === "Online Customer" || customerType.value === "Take Away / Pickup")) && (
            <>
              <div className="form-group-form-order">
                <label htmlFor="waiter" className="form-label">
                  Waiter
                </label>
                <div className="d-flex width-full-minmize">
                  <Select
                    id="waiter"
                    name="waiter"
                    options={thirdPartyOrderOptions}
                    isSearchable={true}
                    placeholder={`Select...`}
                    className="select-form-order-pos"
                  />
                  <p className="add-customer-odrer-pos-person" onClick={openModalPerson}>Person</p>
                </div>
              </div>
              <div className="form-group-form-order">
                <label htmlFor="cookingTime" className="form-label">
                  Cooking Time
                </label>
                <br />
                <input
                  type="time"
                  className="select-form-order-pos input-form-order"
                />
              </div>
            </>
          )}
        </div>
      </form>
      <CustomerModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <PersonModal modalIsOpen={modalPersonIsOpen} closeModal={closeModalPerson}/>
    </>
  );
};

export default FormOrder;
