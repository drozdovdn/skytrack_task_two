import React, {Component} from 'react';
import { connect } from 'react-redux';
import './style.less';

class FooterLeft extends Component {
  render() {
    const { points } = this.props;
    return (
      <div className="footer__left dark">
        <ul>
          {
            points.map(point => {
              return (
                  <li key={point.id}>{point.title}</li>
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
    points: state.points
  };
};

export default connect(mapStateToProps)(FooterLeft)