import React, { useState, useCallback, useMemo } from 'react';
import { defaultTheme } from './tokens';
import TopBarLayout from './layouts/TopBar';

import {
  FormContainer,
  MainContent,
  Header,
  FormSection,
  FormSectionTitle,
  FormGrid,
  FormField,
  LeftSummaryPane,
  SummarySection,
  PriceBox,
  StyledTable,
  TextLabel,
  TextHint,
} from './components/Form';
import { PrimaryButton } from './components/Button';
import { Input, TextArea, Select, CheckBox } from './components/Input';
import TagsInput from './components/TagsInput';
import RadioGroup from './components/RadioGroup';
import SidebarLayout from './layouts/SideBar';

const ProvisioningWorkflow = () => {

  const [credits, setCredits] = useState(365);

  // initial form state
  const [formData, setFormData] = useState({
    serviceName: 'oracle_DB_2023',
    description: '',
    tags: ['key1: value1', 'key2 : value2'],
    softwareRelease: 'oracle21c',
    version: '21.0.0.0',
    createAsContainer: true,
    maintenanceWindow: 'selectWindow',
    startDate: 'sunday',
    startTime: '04:00',
    duration: '0.5',
    enableAutoMinorUpdate: false,
    sla: 'dev-qa-sla',
    snapshotTime: '04:00',
    tableRows: [
      { id: 1, checked: false, title: 'Row Title 1' },
      { id: 2, checked: false, title: 'Row Title 2' },
      { id: 3, checked: false, title: 'Row Title 3' },
      { id: 4, checked: false, title: 'Row Title 4' },
    ]
  });

  const [errors, setErrors] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleAddTag = useCallback((tagKey, tagValue) => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, `${tagKey}:${tagValue}`],
    }));
  },[]);

  const handleRemoveTag = useCallback((tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  },[]);

  const handleAllClicked = () => {
    setFormData((prev) => ({
      ...prev,
      tableRows: prev.tableRows.map(row => ({ ...row, checked: !areAllRowsChecked }))
    }));
  }

  const areAllRowsChecked = useMemo(() => {
    if(formData.tableRows.length === 0) return false;
    return formData.tableRows.every(row => row.checked);
  }, [formData.tableRows]);

  const handleTableRowCheckboxChange = useCallback((id) => {
    setFormData((prev) => ({
      ...prev,
      tableRows: prev.tableRows.map(row =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    }));
  }, []);

  const handleRowDelete = useCallback((id, deleteAll) => {
    setFormData((prev) => ({
      ...prev,
      tableRows: deleteAll ? [] : prev.tableRows.filter(row => row.id !== id)
    }));
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.serviceName) {
      newErrors.serviceName = 'Service Name is required.';
    }
    if(!formData.sla){
      newErrors.sla = 'SLA is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data submitted:', formData);
      setCredits((credits - 99.99).toFixed(2));
      alert('Form Submitted! Check console for data.');
    } else {
      console.log('Form has errors:', errors);
      alert('Please fix the errors in the form.');
    }
  };

  const maintenanceWindowOptions = [
    { label: 'No Preferences', value: 'noPreference' },
    { label: 'Select Window', value: 'selectWindow' },
  ];

  return (
    <>
      <FormContainer>
        <SidebarLayout/>
        
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
          <TopBarLayout credits={credits}/>
          <Header>
            <h2>Create New Oracle Database Service</h2>
            <div>
              <span>{"< > Code"}</span>
              <img src='images/close.svg' />
            </div>
          </Header>
          <MainContent>
            <LeftSummaryPane>
              <SummarySection>
                <div className='Header1'>Service Details</div>
                <div>
                  <span>Oracle_service</span>
                  <img src='images/vector.svg' />
                  <span>|</span>
                  <span>oracle_para_profile</span>
                </div>
              </SummarySection>

              <SummarySection>
                <div className='Header2'>Additional Setting</div>
                <div style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span>No Preference: Enabled minor version update |</span>
                  <span>Today at 04:00 Snapshot time |</span>
                </div>
              </SummarySection>

              <PriceBox>
                <div className="price-label">
                  <div className="price-labeled">
                    <div>Estimated Monthly Price*</div>
                    <a href="#">View details</a>
                  </div>
                  <div className="price-value">$99.99</div>
                </div>

                <PrimaryButton onClick={handleSubmit} disabled={credits < 99.99} style={{ width: '100%' }}>
                  + Create service
                </PrimaryButton>
              </PriceBox>
            </LeftSummaryPane>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FormSection>
                <FormSectionTitle>Service Details</FormSectionTitle>
                <TextHint>Service Name, Service Description, Software Release</TextHint>
                <FormField className={errors.serviceName ? 'error' : ''} style={{ width: '50%' }}>
                  <TextLabel as="label" htmlFor="serviceName">Service Name</TextLabel>
                  <Input
                    type="text"
                    id="serviceName"
                    name="serviceName"
                    value={formData.serviceName}
                    onChange={handleChange}
                    placeholder="Enter service name"
                  />
                  {errors.serviceName && <span className="error-message">{errors.serviceName}</span>}
                </FormField>
                <FormField>
                  <TextLabel as="label" htmlFor="description">Description (optional)</TextLabel>
                  <TextArea
                    id="description"
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Add a description"
                  />
                </FormField>
                <FormField>
                  <TextLabel as="label" htmlFor="tags">Tags</TextLabel>
                  <TagsInput
                    tags={formData.tags}
                    onAddTag={handleAddTag}
                    onRemoveTag={handleRemoveTag}
                  />
                </FormField>
                <FormSectionTitle>Engine configuration</FormSectionTitle>
                <TextHint>Adjustable parameters, performance optimization, fine-tuning options</TextHint>
                <FormGrid>
                  <FormField>
                    <TextLabel as="label" htmlFor="softwareRelease">Software Release</TextLabel>
                    <Select
                      id="softwareRelease"
                      name="softwareRelease"
                      value={formData.softwareRelease}
                      onChange={handleChange}
                    >
                      <option value="oracle21c">Oracle 21c</option>
                      <option value="oracle19c">Oracle 19c</option>
                    </Select>
                  </FormField>
                  <FormField>
                    <TextLabel as="label" htmlFor="version">Version</TextLabel>
                    <Select
                      id="version"
                      name="version"
                      value={formData.version}
                      onChange={handleChange}
                    >
                      <option value="21.0.0.0">21.0.0.0</option>
                      <option value="19.0.0.0">19.0.0.0</option>
                    </Select>
                  </FormField>
                  <FormField>
                    <TextLabel as="label" htmlFor="createAsContainer">
                      <CheckBox
                        type="checkbox"
                        id="createAsContainer"
                        name="createAsContainer"
                        checked={formData.createAsContainer}
                        onChange={handleChange}
                        style={{ marginRight: '8px', height: '16px', width: '16px' }}
                      />
                      <span>Create as a Container Database</span>
                    </TextLabel>
                  </FormField>
                </FormGrid>

              </FormSection>

              {/* Additional Settings Section */}
              <FormSection>
                <FormSectionTitle>Additional settings</FormSectionTitle>
                <TextHint>Maintenance Window, Availability machine</TextHint>
                <FormField>
                  <TextLabel as="label">Maintenance Window</TextLabel>
                  <TextHint>Determines when maintenance window is</TextHint>
                  <RadioGroup
                    name="maintenanceWindow"
                    options={maintenanceWindowOptions}
                    selectedValue={formData.maintenanceWindow}
                    onChange={handleChange}
                  />
                </FormField>

                {formData.maintenanceWindow === 'selectWindow' && (
                  <FormGrid>
                    <FormField>
                      <TextLabel as="label" htmlFor="startDate">Start day</TextLabel>
                      <Select
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                      >
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                      </Select>
                    </FormField>
                    <FormField>
                      <TextLabel as="label" htmlFor="startTime">Start time</TextLabel>
                      <Input
                        type="text"
                        id="startTime"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleChange}
                        placeholder="HH:MM"
                      />
                    </FormField>
                    <FormField>
                      <TextLabel as="label" htmlFor="duration">Duration</TextLabel>
                      <Select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                      >
                        <option value="0.5">0.5</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Select>
                    </FormField>
                  </FormGrid>
                )}

                <FormField style={{ marginTop: defaultTheme.spacing.l }}>
                  <TextLabel as="label">
                    <input
                      type="checkbox"
                      id="enableAutoMinorUpdate"
                      name="enableAutoMinorUpdate"
                      checked={formData.enableAutoMinorUpdate}
                      onChange={handleChange}
                      style={{ marginRight: '8px', height: '16px', width: '16px' }}
                    />
                    Enable auto minor version update
                  </TextLabel>
                </FormField>
                <FormSectionTitle>Availability Machine Preferences</FormSectionTitle>
                <TextHint>Since the database has been created, you can further define the data availability and addon policies as the machine is created.</TextHint>

                <FormGrid>
                  <FormField>
                    <TextLabel as="label" htmlFor="sla">SLA</TextLabel>
                    <Input
                      type="text"
                      id="sla"
                      name="sla"
                      value={formData.sla}
                      onChange={handleChange}
                    />
                    {errors.sla && <span className="error-message">{errors.sla}</span>}
                  </FormField>
                  <FormField>
                    <TextLabel as="label" htmlFor="snapshotTime">Snapshot time</TextLabel>
                    <Input
                      type="text"
                      id="snapshotTime"
                      name="snapshotTime"
                      value={formData.snapshotTime}
                      onChange={handleChange}
                      placeholder="HH:MM"
                      className='TimeInput'
                    ></Input>
                  </FormField>
                </FormGrid>

                <StyledTable>
                  <thead>
                    <tr>
                      <th style={{ width: '5%' }}><CheckBox type="checkbox" checked={areAllRowsChecked} onChange={() => handleAllClicked()} style={{ height: '16px', width: '16px' }} />
                      </th>
                      <th>Header</th>
                      <th>Header</th>
                      <th style={{ justifyItems: 'end', paddingRight: areAllRowsChecked ? '10px' : '32px' }}>{areAllRowsChecked ? <button type="button" className="delete-button" onClick={() => handleRowDelete(1,true)}>
                        <img src='images/leadingIcon.svg' />
                      </button> : "Header"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.tableRows.map(row => (
                      <tr key={row.id}>
                        <td>
                          <CheckBox
                            type="checkbox"
                            checked={row.checked}
                            onChange={() => handleTableRowCheckboxChange(row.id)}
                            style={{ height: '16px', width: '16px' }}
                          />
                        </td>
                        <td><a href="#">Link</a></td>
                        <td>Row Title</td>
                        <td style={{ justifyItems: 'end' }}>
                          <button type="button" className="delete-button" onClick={() => handleRowDelete(row.id,false)}>
                            <img src='images/leadingIcon.svg' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
                <TextLabel as="label" style={{ marginTop: defaultTheme.spacing.m, backgroundColor: defaultTheme.colors.surface['400'], padding: defaultTheme.spacing.s }}>
                  <span><img src='images/info.svg' /></span>Projecting an estimated total count of 79 snapshots with the above configuration.
                </TextLabel>
              </FormSection>
            </div>
          </MainContent>
        </div>
      </FormContainer>
    </>
  );
};

export default ProvisioningWorkflow;