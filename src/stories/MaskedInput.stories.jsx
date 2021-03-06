import { MaskedInput } from '../lib';
import React from "react";
import Typography from "@material-ui/core/Typography";

export default {
  component: MaskedInput,
  title: 'MaskedInput',
};

export const InputMasked = (args) => <>
  <Typography variant="h4" style={{ textAlign: 'center'}}>MaskedInput</Typography>
  <MaskedInput {...args} />
</>
InputMasked.args = {
  variant: 'outlined',
  label: 'Home number',
  type: 'tel',
  mask: '(999) 999-9999 9999 9999',
  maskPlaceholder: '',
  onChange: console.log,
  size: 'small',
  // value: '(895) 869-846',
  beforeMaskedStateChange: ({ currentState, nextState }) => {
    return nextState
  },
};
