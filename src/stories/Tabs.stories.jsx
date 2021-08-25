import { Tabs, Tab } from '../lib';
import React from 'react';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const Default = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" centered>
      <Tab label="Details" />
      <Tab label="Teams" />
      <Tab label="Members" />
    </Tabs>
  );
};
