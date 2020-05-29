import React, {Component} from 'react';
import { connect } from 'react-redux';
import './style.less';
class More extends Component {
  render() {
    const {tel, mail, site} = this.props.moreData;
    return (
      <div className="head__more dark">
        <ul className="head__more-content">
          <li>
            <a href={'tel:'+tel}>{tel}</a>
          </li>
          <li>
            <a href={'mailto:'+mail}>{mail}</a>
          </li>
          <li>
            <a href={site}>{site}</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moreData: state.moreData,
  }
};

export default connect(mapStateToProps)(More);