import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

import Video from 'components/Video';

export class VideoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.videoPage}>
        <Helmet
          title="VideoPage"
          meta={[{ name: 'description', content: 'Description of VideoPage' }]}
        />

        <div className={styles.videoContain}>
          <Video />
        </div>
        <div className={styles.chatContain}>
          <div className={styles.chat}>
            <div className={styles.title}>twitch chat</div>
          </div>
        </div>

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(VideoPage);
