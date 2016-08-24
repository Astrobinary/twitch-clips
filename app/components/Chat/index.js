import React from 'react';
import styles from './styles.css';
import $ from 'jquery';
import chatJson from './chat.json';
class Chat extends React.Component { // eslint-disable-line react/prefer-stateless-function
/* eslint-disable no-console */
  componentDidMount() {
    setTimeout(() => {
      $('#chat').css('height', '300') ;
      const temp = $('video').height() - 37;
      $('#chat').css('height', temp.toString());
    }, 50);
  }
  resize() {
    setTimeout(() => {
      const temp = $('video').height() - 37;
      $('#chat').css('height', temp.toString());
    }, 10);
  }
  render() {
    const names = chatJson.data.map((msg) => {
      return (<div className={styles.message}>
        <span className={styles.user}>{msg.attributes.from} </span>
        <span className={styles.text}>: {msg.attributes.message}</span>
      </div>);
    });
    this.resize()

    $(window).resize(() => {
      this.resize()
    });

    return (
      <div id="chat" className={styles.chat}>
        {names}
      </div>
    );
  }
}

export default Chat;

// 69.995625
