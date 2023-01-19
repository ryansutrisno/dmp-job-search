import React from 'react';
import {Box, Checkbox} from '@material-ui/core';
import Label from './Label';

const CheckBox = ({checked, label, onChangeCheck}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Box>
        <Checkbox
          defaultChecked
          checked={checked}
          onChange={onChangeCheck}
          inputProps={{'aria-label': 'primary checkbox'}}
          color="primary"
        />
      </Box>
      <Box ml={1}>
        <Label>{label}</Label>
      </Box>
    </Box>
  );
};

export default CheckBox;
