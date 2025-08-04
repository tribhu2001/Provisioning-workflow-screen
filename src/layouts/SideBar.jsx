import React, { useState } from 'react';
import { Sidebar, SidebarHeader, SidebarNav } from "../components/Form";
import { Select } from "../components/Input";

const SidebarLayout = () => {
  const [activeItem, setActiveItem] = useState('my-services');
  const [serviceType, setServiceType] = useState('DB Services');
  const navItems = [
    { id: 'apps', icon: 'images/switcher.png', text: 'Apps', type: 'link' },
    {
      id: 'db-services-select',
      text: 'DB Services',
      type: 'select',
      value: serviceType,
      options: [
        { value: 'DB Services', label: 'DB Services' },
        { value: 'Oracle', label: 'Oracle Database' },
        { value: 'MySQL', label: 'MySQL Database' },
      ]
    },
    { id: 'my-services', icon: 'images/services.svg', text: 'My services', type: 'link' },
    { id: 'provisioning', icon: '/images/provisioning.png', text: 'Provisioning', type: 'link' },
    { id: 'availability', icon: '/images/availability.png', text: 'Availability Machines', type: 'link' },
    { id: 'dataflix', icon: '/images/Dataflix.png', text: 'Dataflix', type: 'link' },
    { id: 'scriptlibrary', icon: '/images/script.png', text: 'ScriptLibrary', type: 'link' },
    { id: 'benchmarks', icon: '/images/benchmarks.png', text: 'Benchmarks', type: 'link' },
    { id: 'servers', icon: '/images/servers.png', text: 'Servers', type: 'link' },
  ];

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setActiveItem(id);
  };


  return (
    <Sidebar>
      <SidebarHeader>
        <span><img src='images/tessell.png' alt='Tessell Logo' /></span>
        <span>Tessell</span>
      </SidebarHeader>
      <SidebarNav>
        <ul>
          {navItems.map((item) => (
            <li
              key={item.id}
              className={activeItem === item.id ? 'active' : ''}
              onClick={(e) => handleLinkClick(e, item.id)}
            >
              {item.type === 'link' ? (
                <a href="#">
                  {item.icon && <img src={item.icon} alt={item.text} />}
                  <span>{item.text}</span>
                </a>
              ) : (
                <Select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  {item.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              )}
            </li>
          ))}
        </ul>
      </SidebarNav>
    </Sidebar>
  );
};

export default SidebarLayout;