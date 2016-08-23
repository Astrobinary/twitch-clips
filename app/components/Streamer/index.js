import React from 'react';

import styles from './styles.css';
import avatarTest from './sneaky.png';
import star from './star.svg';


class Streamer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div className={styles.streamer}>
          <img className={styles.avatar} src={avatarTest} alt="avatar img"></img>
          <div className={styles.buttons}>
            <div className={styles.streamerName}>C9Sneaky</div>
            <div className={styles.clips}>54</div>
            <div className={styles.follow}><img src={star} alt="star icon" />follow</div>
            <div className={styles.followAmmount}>32</div>

          </div>

        </div>
      </div>

    );
  }
}

export default Streamer;
