/* eslint-disable no-nested-ternary */
import React from 'react';
import {makeStyles, CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {colors} from '../config/colors';

const Btn = ({
  disabled,
  outlined,
  text,
  children,
  startIcon,
  endIcon,
  fullWidth,
  onClick,
  style,
  loading,
}) => {
  const classes = useStyles();

  return (
    <Button
      variant={text ? 'text' : outlined ? 'outlined' : 'contained'}
      startIcon={startIcon}
      endIcon={endIcon}
      disableElevation
      fullWidth={fullWidth}
      color={disabled ? 'secondary' : 'primary'}
      className={text ? null : disabled ? classes.disabled : classes.primary}
      onClick={onClick}
      style={{
        ...style,
        backgroundColor: outlined && colors.white,
        pointerEvents: disabled ? 'none' : null,
      }}
    >
      {loading && (
        <CircularProgress
          color={!outlined && !text ? colors.white : colors.primary}
          size={14}
        />
      )}
      {!loading && children}
    </Button>
  );
};

export default Btn;

const useStyles = makeStyles({
  primary: {
    boxShadow: '0px 6px 6px rgba(188, 200, 231, 0.2)',
    '&:hover': {
      boxShadow: '0px 6px 6px rgba(188, 200, 231, 0.2)',
    },
  },
  disabled: {
    boxShadow: '0px 6px 6px rgba(188, 200, 231, 0.2)',
    '&:hover': {
      boxShadow: '0px 6px 6px rgba(188, 200, 231, 0.2)',
      cursor: 'not-allowed',
      backgroundColor: colors.gray.medium,
    },
  },
});
