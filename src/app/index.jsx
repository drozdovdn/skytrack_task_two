import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less'

import Logo from './../components/logo'
import Contact from '../components/contact';
import More from '../components/more';

class App extends Component{

  static propTypes = {

  };

  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="head">
            <Logo/>
            <Contact/>
            <More/>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps, Actions)(App);
