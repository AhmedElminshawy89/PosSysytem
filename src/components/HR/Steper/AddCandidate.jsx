import React, { useState } from 'react';
import { Form, Input,Upload, Button, Steps, DatePicker, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Step } = Steps;
const { Option } = Select;

const AddCandidateSteper = () => {
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
            label="Alternative Phone"
            name="User Login Email"
            rules={[{ required: false, message: 'Alternative Phone is required' }]}
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
            label="SSN"
            name="Password"
            rules={[{ required: false, message: 'SSN is required' }]}
            style={{flex:1}}
          >
            <Input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Present Address"
            name="Password"
            rules={[{ required: false, message: 'Present Address is required' }]}
            style={{flex:1}}
          >
            <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Permanent Address"
            name="Password"
            rules={[{ required: false, message: 'Permanent Address is required' }]}
            style={{flex:1}}
          >
            <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </Form.Item>
            </div>
            <div  className='d-flex gap-2 flex-md-row flex-column w-100'>
          <Form.Item
                    label="State"
                    name="division"
                    rules={[{ required: true, message: 'State is required' }]}
                    style={{flex:1}}
                  >
          <Select
            value={formData.division}
            onChange={(value) =>
              setFormData({ ...formData, division: value })
            }
            placeholder="Select Division"
          >
            <Option value="egypt">Giza</Option>
          </Select>
        </Form.Item>
        <Form.Item
                    label="Zip Code"
                    name="division"
                    rules={[{ required: true, message: 'Zip Code is required' }]}
                    style={{flex:1}}
                  >
                     <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
        </Form.Item>

        <Form.Item
  label="Picture"
  name="citizenshipImage"
  rules={[{ required: false, message: 'Picture is required' }]}
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
    <Button icon={<UploadOutlined />}>Upload Picture</Button>
  </Upload>
</Form.Item>
            </div>
        </div>
      ),
    },
    {
      title: 'Education Information',
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
                    label="Obtained Degree"
                    name="designation"
                    rules={[{ required: true, message: 'Obtained Degree is required' }]}
                    style={{flex:1}}

                  >
            <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
                  </Form.Item>
                  <Form.Item
                    label="University "
                    name="hireDate"
                    rules={[{ required: true, message: 'University  is required' }]}
                    style={{flex:1}}

                  >
                                <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
                  </Form.Item>
                  <Form.Item
                    label="CGPA  "
                    name="hireDate"
                    rules={[{ required: true, message: 'CGPA   is required' }]}
                    style={{flex:1}}

                  >
                                <Input
              value={''}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
                  </Form.Item>
                  <Form.Item
                    label="Comments  "
                    name="hireDate"
                    rules={[{ required: true, message: 'Comments   is required' }]}
                    style={{flex:1}}

                  >
                                <Input
              value={''}
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
      title: 'Past Experience',
      content: (
        <div className='d-flex gap-md-2 flex-column'>
          <div className='d-flex gap-4 flex-md-row flex-column w-100'>
          <Form.Item
            label="Company Name"
            name="Custom Field Name"
            rules={[{ required: false, message: 'Company Name is required' }]}
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
            label="Working Period "
            name="Custom Field Type "
            rules={[{ required: false, message: 'Working Period  is required' }]}
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
            label="Duties"
            name="Custom Value"
            rules={[{ required: true, message: 'Duties is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.customValue}
              onChange={(e) =>
                setFormData({ ...formData, customValue: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Supervisor "
            name="Custom Value"
            rules={[{ required: true, message: 'Supervisor  is required' }]}
          style={{flex:1}}
          >
            <Input
              value={formData.supervisorName}
              onChange={(e) =>
                setFormData({ ...formData, supervisorName: e.target.value })
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

export default AddCandidateSteper;
