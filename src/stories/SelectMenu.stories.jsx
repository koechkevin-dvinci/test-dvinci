import { SelectMenu } from '../lib';
import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

export default {
  title: 'Select Menu Component',
  component: SelectMenu,
  argTypes: {},
};

export const Default = (args) => (
  <Box display="flex" justifyContent="center">
    <Box style={{ width: 400 }}>
      <SelectMenu {...args} />
    </Box>
  </Box>
);

const args = {
  size: 'medium',
  value: {
    onClick: console.log,
    label: 'None',
  },
  renderValue: (selected) => {
    return (
      <Box display="flex" alignItems="center">
        <ErrorIcon style={{ color: 'orange', marginRight: 16 }} fontSize="large" />
        <Box style={{ flex: 1 }}>
          <div>
            <Typography>{selected.label}</Typography>
          </div>
          <div>
            <Typography variant="body1" color="textSecondary">
              Secondary text
            </Typography>
          </div>
        </Box>
      </Box>
    );
  },
  options: [
    {
      onClick: console.log,
      label: 'Profile',
    },
    {
      onClick: console.log,
      label: 'My Account',
    },
    {
      onClick: console.log,
      label: 'My Name',
    },
    {
      onClick: console.log,
      label: 'Logout',
    },
  ],
  groupBy: (option) => {
    return option.label;
  },
  renderGroupName: (group) => {
    return (
      <Box>
        <div>
          <Typography variant="overline" color="primary">
            {group}
          </Typography>
        </div>
      </Box>
    );
  },
};

Default.args = args
// export const AsInput = (args) => (
//   <Box display="flex" justifyContent="center">
//     <Box style={{ width: 400 }}>
//       <SelectMenu {...args} />
//     </Box>
//   </Box>
// );
//
// AsInput.args = {
//   ...args,
//   size: 'small',
//   renderGroupName: undefined,
//   groupBy: undefined,
//   renderValue: (selected) => <Typography>{selected.label}</Typography>,
// }

