import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

import selectVideo from './selectors';

import Clip from 'components/Clip';
import Chat from 'components/Chat';
import StreamerInfo from 'components/StreamerInfo';

import { defaultAction } from './actions';


export class VideoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.videoPage}>
        <div id="clappr" className={styles.videoContain}>
          <Clip />
        </div>
        <div className={styles.chatContain}>
          <div className={styles.chatTitle} onClick={this.props.random}>twitch chat</div>
          <Chat />
          <StreamerInfo />
        </div>
      </div>
    );
  }
}

VideoPage.propTypes = {
  random: React.PropTypes.func,
  test: React.PropTypes.func,
};

const mapStateToProps = selectVideo();

function mapDispatchToProps(dispatch) {
  return {
    random: () => dispatch(defaultAction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
