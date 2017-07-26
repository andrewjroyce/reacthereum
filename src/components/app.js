import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import HomePage from '../components/HomePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class App extends React.Component {

constructor (props) {
    super(props);
    this.state = {
      color: 'white'
          };
  }

  render() {
    const { store, categories } = this.props;
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <HomePage store={store}/>
      </MuiThemeProvider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  store: PropTypes.object,
  categories: PropTypes.object
};

export default App;