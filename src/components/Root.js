import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import getRoutes from '../routes';
import { Router } from 'react-router';
import App from '../components/app';
import reducers from '../reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

export default class Root extends Component {

  render() {
    const { store, history } = this.props;
    const muiTheme = getMuiTheme({
    palette: {
      textColor: '#ffffff',
    },
    appBar: {
      height: 50,
    },
    });
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Provider store={store}> 
            <App store={store} />
          </Provider>
        </MuiThemeProvider>
    );
  }
}

  Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    categories: PropTypes.object
  };

  childContextTypes: {
          muiTheme: React.PropTypes.object
      };



