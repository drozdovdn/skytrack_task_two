import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less'

class App extends Component{

  static propTypes = {

  };

  render() {
    return (
      <div className='app'>
        <h1>My app</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps, Actions)(App);
