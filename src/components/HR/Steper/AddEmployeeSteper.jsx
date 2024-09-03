import React, { useState } from 'react';
import { Form, Input,Upload, Button, Steps, DatePicker, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Step } = Steps;
const { Option } = Select;

const AddEmployeeSteper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Step 1
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    userLoginEmail: '',
    password: '',
    // Step 2
    division: '',
    designation: '',
    dutyType: '',
    hireDate: null,
    originalHireDate: null,
    terminationDate: null,
    terminationReason: '',
    voluntaryTermination: false,
    reHireDate: null,
    rateType: '',
    rate: '',
    payFrequency: '',
    payFrequencyText: '',
    homeDepartment: '',
    departmentText: '',
    // Step 3
    benefitClassCode: '',
    benefitDescription: '',
    benefitAccrualDate: null,
    benefitStatus: '',
    // Step 4
    supervisorName: '',
    isSupervisor: false,
    supervisorReport: '',
    // Step 5
    dateOfBirth: null,
    gender: '',
    maritalStatus: '',
    ethnicGroup: '',
    eeoClass: '',
    ssn: '',
    workInState: '',
    liveInState: '',
    citizenship: '',
    photograph: '',
    // Step 6
    homeEmail: '',
    businessEmail: '',
    homePhone: '',
    businessPhone: '',
    cellPhone: '',
    // Step 7
    emergencyContact: '',
    emergencyHomePhone: '',
    emergencyWorkPhone: '',
    emergencyContactRelation: '',
    altEmergencyContact: '',
    altEmergencyHomePhone: '',
    altEmergencyWorkPhone: '',
    // Step 8
    customFieldName: '',
    customFieldType: '',
    customValue: '',
  });

  const [form] = Form.useForm();

  const steps = [
    {
      title: 'Basic Information',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true, message: 'First Name is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[{ required: true, message: 'Last Name is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name="Email Address"
            rules={[{ required: true, message: 'Email Address is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Phone"
            name="Phone"
            rules={[{ required: true, message: 'Phone is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </Form.Item>
          </div>
            <div className='d-flex gap-2 flex-md-row flex-column w-100'>
          <Form.Item
  label="Country"
  name="country"
  rules={[{ required: false, message: 'Country is required' }]}
  style={{flex:1}}
>
  <Select
    value={formData.country}
    onChange={(value) =>
      setFormData({ ...formData, country: value })
    }
    placeholder="Select Country"
  >
    <Option value="egypt">Cairo</Option>
    <Option value="saudi">Saudi</Option>
    <Option value="uae">Qatar</Option>
  </Select>
        </Form.Item>
        <Form.Item
          label="State"
          name="steta"
          rules={[{ required: false, message: 'State is required' }]}
          style={{flex:1}}
        >
          <Select
            value={formData.state}
            onChange={(value) =>
              setFormData({ ...formData, state: value })
            }
            placeholder="Select Country"
          >
            <Option value="egypt">Giza</Option>
          </Select>
        </Form.Item>
          <Form.Item
            label="City"
            name="City"
            rules={[{ required: false, message: 'City is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Zip Code"
            name="Zip Code"
            rules={[{ required: false, message: 'Zip Code is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.zipCode}
              onChange={(e) =>
                setFormData({ ...formData, zipCode: e.target.value })
              }
            />
          </Form.Item>
            </div>
            <div className='d-flex gap-2 flex-md-row flex-column w-100'>
          <Form.Item
            label="User Login Email"
            name="User Login Email"
            rules={[{ required: false, message: 'User Login Email is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.userLoginEmail}
              onChange={(e) =>
                setFormData({ ...formData, userLoginEmail: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="Password"
            rules={[{ required: false, message: 'Password is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Item>
            </div>
        </div>
      ),
    },
    {
      title: 'Positional Info',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                  <Form.Item
                    label="Division"
                    name="division"
                    rules={[{ required: true, message: 'Division is required' }]}
                    style={{flex:1}}
                  >
          <Select
            value={formData.division}
            onChange={(value) =>
              setFormData({ ...formData, division: value })
            }
            placeholder="Select Division"
          >
            <Option value="egypt">Senior Accountant</Option>
          </Select>
                  </Form.Item>
                  <Form.Item
                    label="Designation"
                    name="designation"
                    rules={[{ required: true, message: 'Designation is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.designation}
    onChange={(value) =>
      setFormData({ ...formData, designation: value })
    }
    placeholder="Select Designation"
  >
    <Option value="egypt">Full Time</Option>
    <Option value="saudi">Part Time</Option>
  </Select>
                  </Form.Item>
                  <Form.Item
                    label="Hire Date"
                    name="hireDate"
                    rules={[{ required: true, message: 'Hire Date is required' }]}
                    style={{flex:1}}

                  >
                    <DatePicker
                      value={formData.hireDate}
                      onChange={(date) =>
                        setFormData({ ...formData, hireDate: date })
                      }
                    />
                  </Form.Item>
                </div>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                  <Form.Item
                    label="Duty Type"
                    name="dutyType"
                    rules={[{ required: false, message: 'Duty Type is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.dutyType}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select DutyType"
  >
    <Option value="egypt">Full Time</Option>
    <Option value="saudi">Part Time</Option>
  </Select>
                  </Form.Item>
                  <Form.Item
  label="Original Hire Date"
  name="Original Hire Date"
  rules={[{ required: true, message: 'Original Hire Date is required' }]}
  style={{ flex: 1 }}
>
  <DatePicker
    value={formData.originalHireDate}
    onChange={(date) =>
      setFormData({ ...formData, originalHireDate: date })
    }
    placeholder="Select Original Hire Date"
    style={{ width: '100%' }}
  />
</Form.Item>
<Form.Item
  label="Termination Date"
  name="Termination Date"
  rules={[{ required: false, message: 'Termination Date is required' }]}
  style={{ flex: 1 }}
>
  <DatePicker
    value={formData.terminationDate}
    onChange={(date) =>
      setFormData({ ...formData, terminationDate: date })
    }
    placeholder="Select Termination Date"
    style={{ width: '100%' }}
  />
</Form.Item>

                </div>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                  <Form.Item
                    label="Terminate Reason"
                    name="dutyType"
                    rules={[{ required: false, message: 'Terminate Reason is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.terminationReason}
    onChange={(value) =>
      setFormData({ ...formData, terminationReason: value })
    }
    placeholder="Select terminationReason"
  >
    <Option value="egypt">Full Time</Option>
    <Option value="saudi">Part Time</Option>
  </Select>
                  </Form.Item>
                  <Form.Item
                    label="Voluntary Terminate"
                    name="dutyType"
                    rules={[{ required: false, message: 'Voluntary Terminate is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.voluntaryTermination}
    onChange={(value) =>
      setFormData({ ...formData, voluntaryTermination: value })
    }
    placeholder="Select voluntaryTermination"
  >
    <Option value="egypt">Yes </Option>
    <Option value="saudi">No </Option>
  </Select>
                  </Form.Item>
                  <Form.Item
                    label="Rate Type"
                    name="Rate Type"
                    rules={[{ required: false, message: 'Rate Type is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.rateType}
    onChange={(value) =>
      setFormData({ ...formData, rateType: value })
    }
    placeholder="Select rateType"
  >
    <Option value="egypt">Salary </Option>
    <Option value="saudi">hourly </Option>
  </Select>
                  </Form.Item>
                </div>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                <Form.Item
                    label="Rate"
                    name="Rate"
                    rules={[{ required: false, message: 'Rate is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Rate"
    style={{ flex:1 }}
  />
                  </Form.Item>
                  <Form.Item
                    label="Pay Frequency"
                    name="Pay Frequency"
                    rules={[{ required: false, message: 'Pay Frequency is required' }]}
                    style={{flex:1}}

                  >
  <Select
    value={formData.rateType}
    onChange={(value) =>
      setFormData({ ...formData, rateType: value })
    }
    placeholder="Select rateType"
  >
    <Option value="egypt">Annual </Option>
    <Option value="saudi">Monthly </Option>
  </Select>
                  </Form.Item>
                  <Form.Item
                    label="Pay Frequency Text"
                    name="Pay Frequency Text"
                    rules={[{ required: false, message: 'Pay Frequency Text is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Pay Frequency Text"
    style={{ flex:1 }}
  />
                  </Form.Item>
                </div>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                  <Form.Item
                    label="Hourly Rate2"
                    name="Hourly Rate2"
                    rules={[{ required: false, message: 'Hourly Rate2 is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Hourly Rate2"
    style={{ flex:1 }}
  />
                  </Form.Item>
                  <Form.Item
                    label="Hourly Rate3"
                    name="Hourly Rate3"
                    rules={[{ required: false, message: 'Hourly Rate3 is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Hourly Rate3"
    style={{ flex:1 }}
  />
                  </Form.Item>
                  <Form.Item
                    label="Home Department"
                    name="Home Department"
                    rules={[{ required: false, message: 'Home Department is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Home Department"
    style={{ flex:1 }}
  />
                  </Form.Item>
                </div>
                <div className='d-flex gap-4 flex-md-row flex-column w-100'>
                  <Form.Item
                    label="Home Department"
                    name="Home Department"
                    rules={[{ required: false, message: 'Home Department is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Home Department"
    style={{ flex:1 }}
  />
                  </Form.Item>
                  <Form.Item
                    label="Department Text"
                    name="Department Text"
                    rules={[{ required: false, message: 'Department Text is required' }]}
                    style={{flex:1}}

                  >
  <Input
    value={formData.rate}
    onChange={(e) =>
      setFormData({ ...formData, rate: e.target.value })
    }
    placeholder="Enter Department Text"
    style={{ flex:1 }}
  />
                  </Form.Item>
                </div>

        </div>
      ),
    },
    {
      title: 'Benefits',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Benefit Class Code"
            name="benefitClassCode"
            rules={[{ required: true, message: 'Benefit Class Code is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Benefit Description"
            name="Benefit Description"
            rules={[{ required: true, message: 'Benefit Description is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
        
          </div>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Benefit Accrual Date"
            name="Benefit Accrual Date"
            rules={[{ required: true, message: 'Benefit Accrual Date is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Benefit Status"
            name="Benefit Status"
            rules={[{ required: true, message: 'Benefit Status is required' }]}
            style={{flex:1}}
          >
  <Select
    value={formData.dutyType}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select DutyType"
  >
    <Option value="egypt">Active</Option>
    <Option value="saudi">Inactive</Option>
  </Select>
          </Form.Item>
        
          </div>
        </div>
      ),
    },
    {
      title: 'Supervisor Details',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Supervisor Name"
            name="supervisorName"
            rules={[{ required: false, message: 'Supervisor Name is required' }]}
            style={{flex:1}}
          >
  <Select
    value={formData.dutyType}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select Supervisor Name "
  >
    <Option value="egypt"></Option>
    <Option value="saudi"></Option>
  </Select>
          </Form.Item>
          <Form.Item
            label="Is Supervisor"
            name="is supervisorName"
            rules={[{ required: false, message: 'Is Supervisor Name is required' }]}
            style={{flex:1}}
          >
  <Select
    value={formData.dutyType}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select Supervisor Name "
  >
    <Option value="egypt">Yes</Option>
    <Option value="saudi">No</Option>
  </Select>
          </Form.Item>
          <Form.Item
            label="Supervisor Report"
            name="is supervisorName"
            rules={[{ required: false, message: 'Is Supervisor Name is required' }]}
            style={{flex:1}}
          >
                        <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
          
          </div>
        </div>
      ),
    },
    {
      title: 'Biographical Info',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[{ required: true, message: 'Date of Birth is required' }]}
            style={{flex:1}}
          >
            <DatePicker
              value={formData.dateOfBirth}
              onChange={(date) =>
                setFormData({ ...formData, dateOfBirth: date })
              }
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Gender is required' }]}
            style={{flex:1}}
          >
             <Select
    value={formData.gender}
    onChange={(value) =>
      setFormData({ ...formData, gender: value })
    }
    placeholder="Select Gender "
  >
    <Option value="egypt">Male</Option>
    <Option value="saudi">Female</Option>
  </Select>
          </Form.Item>
          <Form.Item
            label="Marital Status "
            name="mateStatus"
            rules={[{ required: true, message: 'Marital Status  is required' }]}
            style={{flex:1}}
          >
             <Select
    value={formData.maritalStatus}
    onChange={(value) =>
      setFormData({ ...formData, maritalStatus: value })
    }
    placeholder="Select Marital Status "
  >
    <Option value="egypt">Single</Option>
    <Option value="saudi">Married</Option>
  </Select>
          </Form.Item>
          </div>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="EEO Class"
            name="dateOfBirth"
            rules={[{ required: false, message: 'EEO Class is required' }]}
            style={{flex:1}}
          >
                                    <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="SSN"
            name="dateOfBirth"
            rules={[{ required: false, message: 'SSN is required' }]}
            style={{flex:1}}
          >
                                    <Input
              value={formData.benefitClassCode}
              onChange={(e) =>
                setFormData({ ...formData, benefitClassCode: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Work in State "
            name="dateOfBirth"
            rules={[{ required: false, message: 'EEO Class is required' }]}
            style={{flex:1}}
          >
             <Select
    value={formData.gender}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select Work in State  "
  >
    <Option value="egypt">Yes</Option>
    <Option value="saudi">No</Option>
  </Select>
          </Form.Item>
          </div>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Live in State"
            name="dateOfBirth"
            rules={[{ required: false, message: 'EEO Class is required' }]}
            style={{flex:1}}
          >
             <Select
    value={formData.gender}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select Work in State  "
  >
    <Option value="egypt">Yes</Option>
    <Option value="saudi">No</Option>
  </Select>
          </Form.Item>
          <Form.Item
            label="Citizenship "
            name="dateOfBirth"
            rules={[{ required: false, message: 'Citizenship  is required' }]}
            style={{flex:1}}
          >
             <Select
    value={formData.gender}
    onChange={(value) =>
      setFormData({ ...formData, dutyType: value })
    }
    placeholder="Select Citizenship  "
  >
    <Option value="egypt">Citizen</Option>
    <Option value="saudi">Not Citizen</Option>
  </Select>
          </Form.Item>

<Form.Item
  label="Citizenship"
  name="citizenshipImage"
  rules={[{ required: true, message: 'Citizenship image is required' }]}
  style={{ flex: 1 }}
>
  <Upload
    beforeUpload={() => false} 
    onChange={(info) => {
      const file = info.file.originFileObj;
      setFormData({ ...formData, citizenshipImage: file });
    }}
    accept="image/*"
  >
    <Button icon={<UploadOutlined />}>Upload Citizenship Image</Button>
  </Upload>
</Form.Item>
          </div>
        </div>
      ),
    },
    {
      title: 'Additional Address',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Home Email"
            name="Home Email"
            rules={[{ required: false, message: 'Home Email is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.homeEmail}
              onChange={(e) =>
                setFormData({ ...formData, homeEmail: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Business Email"
            name="Business Email"
            rules={[{ required: false, message: 'Business Email is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.businessEmail}
              onChange={(e) =>
                setFormData({ ...formData, businessEmail: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Home Phone"
            name="Home Phone"
            rules={[{ required: true, message: 'Home Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.homePhone}
              onChange={(e) =>
                setFormData({ ...formData, homePhone: e.target.value })
              }
            />
          </Form.Item>

                </div>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Business Phone"
            name="Business Phone"
            rules={[{ required: true, message: 'Business Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.businessPhone}
              onChange={(e) =>
                setFormData({ ...formData, businessPhone: e.target.value })
              }
            />
          </Form.Item>    
          <Form.Item
            label="Call Phone"
            name="Call Phone"
            rules={[{ required: true, message: 'Call Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.cellPhone}
              onChange={(e) =>
                setFormData({ ...formData, cellPhone: e.target.value })
              }
            />
          </Form.Item>    
        
          </div>
        </div>
      ),
    },
    {
      title: 'Emergency Contact',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Emergency Contact"
            name="Emergency Contact"
            rules={[{ required: false, message: 'Emergency Contact is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.emergencyContact}
              onChange={(e) =>
                setFormData({ ...formData, emergencyContact: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Emergency Home Phone"
            name="Emergency Home Phone"
            rules={[{ required: false, message: 'Emergency Home Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.emergencyHomePhone}
              onChange={(e) =>
                setFormData({ ...formData, emergencyHomePhone: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Emergency Work Phone"
            name="Emergency Work Phone"
            rules={[{ required: true, message: 'Emergency Work Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.emergencyWorkPhone}
              onChange={(e) =>
                setFormData({ ...formData, emergencyWorkPhone: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Emergency Contact Relation"
            name="Emergency Contact Relation"
            rules={[{ required: true, message: 'Emergency Contact Relation is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.emergencyContactRelation}
              onChange={(e) =>
                setFormData({ ...formData, emergencyContactRelation: e.target.value })
              }
            />
          </Form.Item>    
                </div>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Alter Emergency Contact"
            name="Alter Emergency Contact"
            rules={[{ required: true, message: 'Alter Emergency Contact is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.altEmergencyContact}
              onChange={(e) =>
                setFormData({ ...formData, altEmergencyContact: e.target.value })
              }
            />
          </Form.Item>    
          <Form.Item
            label="Alt Emergency Home Phone"
            name="Alt Emergency Home Phone"
            rules={[{ required: true, message: 'Alt Emergency Home Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.altEmergencyHomePhone}
              onChange={(e) =>
                setFormData({ ...formData, altEmergencyHomePhone: e.target.value })
              }
            />
          </Form.Item>  
          <Form.Item
            label="Alt Emergency Work Phone"
            name="Alt Emergency Work Phone"
            rules={[{ required: true, message: 'Alt Emergency Work Phone is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.altEmergencyWorkPhone}
              onChange={(e) =>
                setFormData({ ...formData, altEmergencyWorkPhone: e.target.value })
              }
            />
          </Form.Item>  
          </div>
        </div>
      ),
    },
    {
      title: 'Custom Fields',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Custom Field Name"
            name="Custom Field Name"
            rules={[{ required: false, message: 'Custom Field Name is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.customFieldName}
              onChange={(e) =>
                setFormData({ ...formData, customFieldName: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Custom Field Type "
            name="Custom Field Type "
            rules={[{ required: false, message: 'Custom Field Type  is required' }]}
          style={{flex:1}}
          >
            <Select
    value={formData.customFieldType}
    onChange={(value) =>
      setFormData({ ...formData, customFieldType: value })
    }
    placeholder="Select customFieldType"
  >
    <Option value="egypt">Text</Option>
    <Option value="saudi">Date</Option>
  </Select>
          </Form.Item>
          <Form.Item
            label="Custom Value"
            name="Custom Value"
            rules={[{ required: true, message: 'Custom Value is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.customValue}
              onChange={(e) =>
                setFormData({ ...formData, customValue: e.target.value })
              }
            />
          </Form.Item>
 
                </div>
        </div>
      ),
    },
  ];

  const next = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Steps current={currentStep}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <div className="steps-content mt-5 mb-5">{steps[currentStep].content}</div>
      <div className="steps-action">
        {currentStep > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {currentStep < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        )}
      </div>
    </Form>
  );
};

export default AddEmployeeSteper;
