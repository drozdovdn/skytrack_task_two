import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as Actions from './actions';
import './style.less'

import Logo from './../components/logo'
import Contact from '../components/contact';
import More from '../components/more';
import LeftMenu from '../components/sidebar-menu';
import AsideBarFooter from '../components/sidebar-footer';

class App extends Component{

  static propTypes = {

  };

  render() {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="head">
              <Logo/>
              <Contact/>
              <More/>
            </div>
          </div>
        </header>
        <section className="main">
          <div className="container">
            <div className="content">
              <aside className="side-bar">
                <LeftMenu />
                <AsideBarFooter />
              </aside>
              <main>

              </main>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

export default connect(mapStateToProps, Actions)(App);
