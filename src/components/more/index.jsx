import React, {Component} from 'react';
import { connect } from 'react-redux';
import './style.less';
class More extends Component {
  render() {
    return (
      <div className="head__more dark">
        <ul className="head__more-content">
          <li>
            <a href={'tel:'+this.props.moreData.tel}>{this.props.moreData.tel}</a>
          </li>
          <li>
            <a href={'mailto:'+this.props.moreData.mail}>{this.props.moreData.mail}</a>
          </li>
          <li>
            <a href={this.props.moreData.site}>{this.props.moreData.site}</a>
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