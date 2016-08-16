import React from 'react';

import styles from './styles.css';
import preview from './preview.jpg';

class Video extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.video}>
        <img src={preview} alt="preview"></img>
      </div>
    );
  }
}

export default Video;
