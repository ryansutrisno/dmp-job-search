import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#fff',
    textDecoration: 'none',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.title}>
              Job Search
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
