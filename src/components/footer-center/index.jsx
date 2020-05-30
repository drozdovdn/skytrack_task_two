import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.less';

class FooterCenter extends Component {
  render() {
    const { linksFooter } = this.props;
    return(
      <div className="foot__center dark">
        <ul className="foot__center-list">
          {
            linksFooter.map( link => {
              return (
                <li key={ link.id }>
                  <a href="#">{ link.title }</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    linksFooter: state.linksFooter
  }
};

export default connect(mapStateToProps)(FooterCenter)