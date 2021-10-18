import { DateTimePicker, TimePicker } from '../lib';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default {
  title: 'Date Time Picker',
  component: DateTimePicker,
  argTypes: {},
};

export const DateTimePickerComponent = (args) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box style={{ width: 400 }}>
        <Typography style={{ marginBottom: 16 }} variant="h5">
          DateTimePicker
        </Typography>
        <DateTimePicker onChange={console.log} {...args} />
      </Box>
    </Box>
  );
};

export const TimePickerComponent = (args) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box style={{ width: 400 }}>
        <Typography variant="h5">TimePicker</Typography>
        <TimePicker onChange={console.log} {...args} />
      </Box>
    </Box>
  );
};

DateTimePickerComponent.args = {
  label: 'Date/Time Picker',
  showToolbar: true,
  toolbarFormat: 'EEEEEE',
  // open: true
};
TimePickerComponent.args = {};
