import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatArrayExample from '../containers/flatArrayExample'
import Paper from 'material-ui/Paper';

const style = {
  height: 175,
  margin: 0,
  padding: 2,
  textAlign: 'center',
  display: 'inline-block',
};

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'white'
          }
  }

  render() {
    const { store, categories } = this.props;
    return (
      <div>
      <Paper style={style} zDepth={5}>
        <h1>What Is Ethereum?</h1>
        <h2>Etherum is a blockchain-based protocol that allows the creation and execution of smart contracts, without requiring centralized or trusted counter parties. Ether (ETH), is the cryptofuel that powers distributed applications on the Ethereum platform.</h2>      
        </Paper>
        <FlatArrayExample store={store}/>
      </div>
    );
  };
}

HomePage.propTypes = {
  store: PropTypes.element
};

export default HomePage;