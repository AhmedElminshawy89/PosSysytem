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

const CategoryForm = () => {
  const [fileList, setFileList] = useState([]);
  const [status, setStatus] = useState('published');
  const [template, setTemplate] = useState('default');
  const [publishDate, setPublishDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [dates, setDates] = useState([]);
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
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
      </div>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>General</h2>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="mb-10">
              <label className=" form-label">Category Name
              <span className="required-field-form-order">*</span>
              </label>
              <Input
                name="categoryName"
                className="form-control mb-2"
                placeholder="Category name"
                value={formik.values.categoryName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.categoryName && formik.errors.categoryName ? (
                <div className="text-danger">{formik.errors.categoryName}</div>
              ) : null}
            </div>
            <div className="mb-10">
            <label className=" form-label">Parent Category
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
            <div className="mb-10 d-flex gap-15 align-items-center">
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
            {isChecked&&(
                <>
                                    <div
                                    className="mb-10"
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
                                                                      className="mb-10"
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
            
                </>
            )}
            <div className="mb-10">
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

export default CategoryForm;
