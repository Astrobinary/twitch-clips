import React from 'react';

import styles from './styles.css';
import Masonry from 'react-masonry-component';
import avatar from './avatar.png';

const masonryOptions = {
  transitionDuration: '0.2s',
  stagger: 30,
  gutter: 34.5,
};


class StreamerItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.masonry} >
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>

        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>
        <div className={styles.contain}>
          <div className={styles.streamer}>
            <span>
              <div className={styles.gradient}></div>
              <img className={styles.avatar} src={avatar} alt="lirikAvatar"></img>
              <div className={styles.sub}>EpileptikRobot</div>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default StreamerItem;
