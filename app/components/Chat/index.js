import React from 'react';

import styles from './styles.css';

class Chat extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.chat}>
        <div className={styles.chatTitle}>twitch chat</div>
      </div>
    );
  }
}

export default Chat;
