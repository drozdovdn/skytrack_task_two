import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.less';

class LeftMenu extends Component{
  render() {
    const {title, links} = this.props.leftMenu;
    return (
        <nav className="menu dark">
          <h2 className="menu__title">{title}</h2>
          <ul>
            {
              links.map(link => {
                return (
                  <li key={link.id}>
                    <a className="menu__link" href="#">{link.title}</a>
                  </li>
                )
              })
            }

          </ul>
        </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leftMenu: state.leftMenu
  }
}

export default connect(mapStateToProps)(LeftMenu)