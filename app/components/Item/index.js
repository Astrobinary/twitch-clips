import React from 'react';
import styles from './styles.css';
import LazyLoad from 'react-lazyload';
import avatar from './defaultAvatar.png';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class Item extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.streamerLink = this.streamerLink.bind(this);
  }

  streamerLink() {
    this.props.dispatch(push(`/streamers/${this.props.streamer.name}`));
  }

  render() {
    return (
      <div className={styles.contain}>
        <div className={styles.streamer}>
          <LazyLoad height="100%" >
            <span onClick={this.streamerLink}>
              <img className={styles.avatar} src={this.props.streamer.avatar === undefined ? avatar : this.props.streamer.avatar} alt={`${this.props.streamer.name}'s avatar`}></img>
              <div className={styles.sub}>{this.props.streamer.name}</div>
            </span>
          </LazyLoad>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  streamer: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(Item);
