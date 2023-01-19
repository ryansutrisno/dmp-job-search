import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/styles';
import Navbar from './layout/Navbar';
import theme from './config/theme';
import './index.css';
import Home from './pages/Home';
import DetailJob from './pages/DetailJob';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/job/:id" component={DetailJob} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
