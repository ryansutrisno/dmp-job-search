import React from 'react';
import {makeStyles, TextField} from '@material-ui/core';

import {colors} from '../config/colors';
import Label from './Label';

const Textfield = ({
  label,
  placeholder,
  fullWidth = true,
  onChange,
  value,
  inputProps = () => {},
  onInput,
}) => {
  const classes = useStyles();

  return (
    <>
      <Label>{label}</Label>
      <TextField
        onInput={onInput}
        type={'text'}
        fullWidth={fullWidth}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        variant="outlined"
        color="secondary"
        className={classes.root}
        classes={{
          root: classes.textfieldRoot,
        }}
        inputProps={inputProps}
      />
    </>
  );
};

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-root': {
      fontSize: 15,
      backgroundColor: colors.white,
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: 0,
    },
    '& .MuiFormHelperText-root': {
      fontSize: 13,
      color: colors.gray.medium,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: colors.alert,
    },
    '& .MuiOutlinedInput-input': {
      padding: 10,
    },
    '& .MuiInputBase-input': {
      '&::placeholder': {
        color: colors.gray.medium,
      },
    },
    '& .MuiInputBase-multiline': {
      padding: 0,
    },
  },
  textfieldRoot: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: `1px solid ${colors.gray.medium}`,
      },
      '&:hover fieldset': {
        border: `1px solid ${colors.gray.medium}`,
      },
      '&.Mui-focused fieldset': {
        border: `1px solid #6889FF`,
      },
    },
  },
});

export default Textfield;
