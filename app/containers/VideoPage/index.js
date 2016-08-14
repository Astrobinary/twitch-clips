/*
 *
 * VideoPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

export class VideoPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.videoPage}>
      <Helmet
        title="VideoPage"
        meta={[
          { name: 'description', content: 'Description of VideoPage' },
        ]}
      />
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
