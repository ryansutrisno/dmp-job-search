import React from 'react';
import {Container, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(6),
  },
}));

const DetailJob = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Paper className={classes.paper}></Paper>
      </Container>
    </div>
  );
};

export default DetailJob;
