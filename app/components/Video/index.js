import React from 'react';
import styles from './styles.css';
import heart from './heart.svg';
import film from './film.svg';
import share from './share.svg';
import controller from './controller.svg';
import Clappr from 'components/ClapprPlayer';


class Video extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.video}>

        <Clappr poster="https://clips-media-assets.twitch.tv/22497508896-index-0000001001-preview.jpg" source="https://clips-media-assets.twitch.tv/22497508896-index-0000001001.mp4" />
        <div className={styles.loadbar}></div>
        <div className={styles.videoTitle_contain}>
          <div className={styles.videoTitle}>Ok hi ppl @Sodapoppintv @Northern_GG</div>
          <div className={styles.icons}>
            <div>
              <img src={heart} alt="heart icon" />
              <span className={styles.tooltip}>LIKE</span>
            </div>

            <div>
              <img src={film} alt="film icon" />
              <span className={styles.tooltip}>VOD</span>
            </div>

            <div>
              <img src={share} alt="share icon" />
              <span className={`${styles.tooltip} ${styles.tooltipFix}`}>SHARE</span>
            </div>

          </div>
          <div className={styles.game}>
            <span>
              <img src={controller} alt="controller icon"></img>
              League of Legends
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
