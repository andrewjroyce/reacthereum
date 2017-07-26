import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';
import { bindActionCreators} from 'redux';
import CategoriesDetail from '../components/categories-detail'
import _ from 'lodash';

var options;

class FlatArrayExample extends Component {
  constructor (props) {
    super(props)
    options = ["Regular Person", "Libertarian", "Investor", "Programmer", "Mom", "Byzantine General", "Five", "Economist", "Crazy Person"]
     const categories = this.props.store.getState().categories;
    var myFunction = function(element) {console.log(element)};
    this.state = {
      categories: categories,
      selected: options[0]
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect(input) {
    this.setState({selected: input.label});
    ()=>{this.props.actions.selectCategory(this.state.selected)};
  }

  render () {
    const { store, history, categories } = this.props;
    const defaultSelected = this.state.selected;
    const defaultCategories = this.state.categories;
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label
    return (
      <section>
        <h4> Explain it to me like I am a ... <Dropdown options={options} onChange={this._onSelect} value={defaultSelected} placeholder="Select an option" /></h4>
        <CategoriesDetail categories={defaultCategories} selected={defaultSelected}/> 
      </section>
    )
  }
}

FlatArrayExample.propTypes = {
  actions: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  store: PropTypes.object
};
  
function mapStateToProps(state){
    return{
        selected: state.selected
    }
}

function mapDispatchtoProps(dispatch){
  return {actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(FlatArrayExample);