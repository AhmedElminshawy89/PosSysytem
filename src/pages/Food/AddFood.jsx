import React, { useState } from 'react';
import { DatePicker, Input, Upload, Button, Tooltip } from 'antd';
import { PlusOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'antd/es/style/index';
import Toolbar from "../../components/Global/ToolBar/Toolbar";
import classesOrderList from "../../components/OrderList/OrderList.module.css";
import  Select from 'react-select';
import { customStylesSelect } from '../../components/PosComponents/PosOrder/Modal/AddClosingBalance';
import CheckInput from '../../components/Global/CheckInput/CheckInput';
import Flatpickr from "react-flatpickr";
import CookingTimeInput from '../../components/PosComponents/PosOrder/Modal/CookingTimeInput';

const AddFood = () => {
  const [fileList, setFileList] = useState([]);
  const [status, setStatus] = useState('published');
  const [template, setTemplate] = useState('default');
  const [publishDate, setPublishDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [dates, setDates] = useState([]);
    const [elements, setElements] = useState([]);

  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
  };
  const addElement = () => {
    setElements((prevElements) => [
      ...prevElements,
      {
        id: Date.now(),
        orderDate: new Date(),
        cutOffDate: new Date(),
      },
    ]);
  };
  const deleteElement = (id) => {
    setElements(elements.filter((element) => element.id !== id));
  };
  const formik = useFormik({
    initialValues: {
      categoryName: '',
      description: '',
    },
    validationSchema: Yup.object({
      categoryName: Yup.string().required('Category name is required'),
    }),
    onSubmit: values => {
      console.log('Form values:', { ...values, status, template, publishDate, fileList });
    },
  });

  const handleFileChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div
    className={`app-main flex-column flex-row-fluid ${classesOrderList.overflowHidden}`}
    id="kt_app_main"
  >
    <div className="d-flex flex-column flex-column-fluid">
      <div className="d-flex justify-content-between bg-white flex-sm-row flex-column">
        <Toolbar
          MainPage="Add Category"
          CurrentPage="Home"
          path={"/"}
          TitlePage="Item Category"
        />
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-fluid"
        >
    <form
      id="kt_ecommerce_add_category_form"
      className="form d-flex flex-column flex-lg-row"
      onSubmit={formik.handleSubmit}
    >
      <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>Thumbnail</h2>
            </div>
          </div>
          <div className="card-body text-center pt-0">
            <Upload
              listType="picture-card"
              fileList={fileList}
              onChange={handleFileChange}
              beforeUpload={() => false}
              accept=".png, .jpg, .jpeg"
            >
              {fileList.length < 1 && (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
            <div className="text-muted fs-7">
              Set the category thumbnail image. Only *.png, *.jpg, and *.jpeg image files are accepted
            </div>
          </div>
        </div>
        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>Pre Order
              </h2>
            </div>
          </div>
          <div className="card-body text-center pt-0">
          <div className="mb-10 d-flex gap-4 align-items-center">
            <label className=" form-label">Pre Order
            </label>
            <div className="d-flex justify-content-start">
            <div className="form-check form-switch form-check-custom form-check-solid d-flex align-items-center justify-content-start">
			<input
				className="form-check-input"
				type="checkbox"
				value={isChecked2}
				id="status"
				name="status"
				checked={isChecked2}
				onClick={() => {
					setIsChecked2((prev) => !prev);
				}}
			/>
		</div>
                            </div>
            </div>
            {isChecked2&&(
                <>
                          <div className="mb-10 d-flex gap-4 align-items-start">
                          <label className=" form-label">Only Pre Order Item
                          </label>
                          <div className="d-flex justify-content-start">
                          <div className="form-check form-switch form-check-custom form-check-solid d-flex align-items-center justify-content-start">
                          <input
                              className="form-check-input"
                              type="checkbox"
                              value={isChecked}
                              id="status"
                              name="status"
                              checked={isChecked}
                              onClick={() => {
                                  setIsChecked((prev) => !prev);
                              }}
                          />
                      </div>
                                          </div>
                          </div>
                                  {elements.map((element) => (
        <React.Fragment key={element.id}>
          <div className="mb-10 d-flex align-items-start flex-column">
            <label htmlFor="orderDate" className="form-label text-start">
              Order Date
            </label>
            <Flatpickr
              className="form-control form-control-solid border-1 border-gray-300 ps-4 bg-white"
              options={{
                mode: 'single',
                dateFormat: 'Y-m-d',
                // onChange={(date) => handleDateChange(date, element.id, 'orderDate')}
              }}
              value={element.orderDate}
              placeholder="Order Date"
            />
          </div>

          <div className="mb-10 d-flex align-items-start flex-column">
            <label htmlFor="cutOffDate" className="form-label">
              CutOff Date
            </label>
            <Flatpickr
              className="form-control form-control-solid border-1 border-gray-300 ps-4 bg-white"
              options={{
                mode: 'single',
                dateFormat: 'Y-m-d',
                // onChange={(date) => handleDateChange(date, element.id, 'cutOffDate')},
              }}
              value={element.cutOffDate}
              placeholder="CutOff Date"
            />
          </div>
      <div className='d-flex gap-2'>
                                  <button onClick={addElement} className="btn btn-light-primary">
            Add Date
          </button>
          <button onClick={deleteElement} className="btn btn-danger">
            Remove
          </button>
      </div>
        </React.Fragment>
      ))}
                </>
            )}

          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>General</h2>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
          <div className="mb-10 w-full-title" style={{flex:1}}>
              <label className=" form-label">Category
              </label>
              <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "Chineese - صيني", value: "Chineese - صيني" },
                          { label: "Chicken / Turkey", value: "Chicken / Turkey" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
            </div>
            <div className="mb-10 w-full-title" style={{flex:1}}>
              <label className=" form-label">Vat
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="0%"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            </div>
            <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Select Station
              </label>
              <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "Pizza", value: "Pizza" },
                          { label: "BBQ", value: "BBQ" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
            </div>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Cooking Time
              </label>
              <CookingTimeInput/>
            </div>
            </div>  
            <div className='d-flex align-items-start justify-content-between gap-sm-10 flex-sm-row flex-column'>
            <div className="mb-5 d-flex gap-4 align-items-start flex-sm-row flex-column">
            <div className="mb-10 d-flex gap-4 align-items-center">
            <label className=" form-label">Offer
            </label>
            <div className="d-flex justify-content-start">
            <div className="form-check form-switch form-check-custom form-check-solid d-flex align-items-center justify-content-start">
			<input
				className="form-check-input"
				type="checkbox"
				value={isChecked}
				id="status"
				name="status"
				checked={isChecked}
				onClick={() => {
					setIsChecked((prev) => !prev);
				}}
			/>
		</div>
                            </div>
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Special
              </label>
                              <CheckInput />
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Custom Quantity
              </label>
                              <CheckInput />
            </div>
            </div>
            </div>  
            {isChecked&&(
                <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
                                    <div
                                    className="mb-10 w-full-title"
                                  >
                                    <label htmlFor="waiter" className="form-label">
                                    Offer Start Date
                                      <span className="required-field-form-order">*</span>
                                    </label>
                                    <Flatpickr
                                      className="form-control form-control-solid border-1 border-gray-300 ps-4 bg-white "
                                      options={{
                                        mode: "single",
                                        dateFormat: "Y-m-d",
                                        onChange: handleDateChange,
                                      }}
                                      value={dates}
                                      placeholder=" Expiry Date"
                                    />
                                  </div>
                                                                      <div
                                                                      className="mb-10 w-full-title"
                                                                    >
                                                                      <label htmlFor="waiter" className="form-label">
                                                                      Offer End Date
                                                                        <span className="required-field-form-order">*</span>
                                                                      </label>
                                                                      <Flatpickr
                                      className="form-control form-control-solid border-1 border-gray-300 ps-4 bg-white "
                                      options={{
                                                                          mode: "single",
                                                                          dateFormat: "Y-m-d",
                                                                          onChange: handleDateChange,
                                                                        }}
                                                                        value={dates}
                                                                        placeholder=" Expiry Date"

                                                                      />
                                                                    </div>
            
                </div>
            )}
            <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Food Name
              <span className="required-field-form-order">*</span>
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="Food name"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.categoryName && formik.errors.categoryName ? (
                <div className="text-danger">{formik.errors.categoryName}</div>
              ) : null}
            </div>
            {isChecked&&(
            <div className="mb-10 w-full-title">
              <label className=" form-label">Offer Rate
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="0"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.categoryName && formik.errors.categoryName ? (
                <div className="text-danger">{formik.errors.categoryName}</div>
              ) : null}
            </div>
            )}
            </div>
            <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Component
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="Add Component"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Notes
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="Add Notes"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-lg-10 flex-lg-row flex-column'>
            <div className="mb-10 w-full-title">
              <label className=" form-label">Describtion
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="Add Describtion"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="mb-10 w-full-title">
            <label className=" form-label">Status
            </label>
            <Select
                        id="waiter"
                        name="waiter"
                        options={[
                          { label: "Active", value: "Active" },
                          { label: "Inactive", value: "Inactive" },
                        ]}
                        isSearchable={true}
                        placeholder={`Select...`}
                        className={`select-form-order-pos`}
                        styles={customStylesSelect}
                      />
            </div>
            </div>
            <div className="mb-10 d-flex gap-4 align-items-start flex-column">
            <label className=" form-label">Menu Type <br/>
            </label>
            <div className='mb-1 d-flex gap-1 align-items-start flex-sm-row flex-column'>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">BBQ
              </label>
                              <CheckInput />
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Asian
              </label>
                              <CheckInput />
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Fusions

              </label>
                              <CheckInput />
            </div>
            </div>
            <div className='mb-1 d-flex gap-1 align-items-start flex-sm-row flex-column'>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Italian
              </label>
                              <CheckInput />
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Egyptian
              </label>
                              <CheckInput />
            </div>
            <div className="mb-10 d-flex gap-4 align-items-center">
              <label className=" form-label">Fresh Juice

              </label>
                              <CheckInput />
            </div>
            </div>
            <div className="mb-1 d-flex gap-1 align-items-center">
              <label className=" form-label">Egyptian
              </label>
                              <CheckInput />
            </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-5 gap-4">
                    <button className="btn btn-primary" >Save</button>
                    <button className="btn btn-outline" >Reset</button>
        </div>
      </div>
    </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddFood;
