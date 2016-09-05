import React from 'react';
import styles from './styles.css';
import $ from 'jquery';
import chatJson from './chat.json';

class Chat extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    setTimeout(() => {
      $('#chat').css('height', '300');
      const temp = $('video').height() - 37;
      $('#chat').css('height', temp.toString());

      const chatWidth = $('#chat').width();
      $('#hideChat').css('margin-left', chatWidth - 35);

      this.renderChat();
    }, 50);
  }
  resize() {
    setTimeout(() => {
      const temp = $('video').height() - 37;
      $('#chat').css('height', temp.toString());

      const chatWidth = $('#chat').width();
      $('#hideChat').css('margin-left', chatWidth - 35);
    }, 10);
  }

  renderChat() {
    let index = 1;
    const totalMsg = chatJson.data.length;
    const timeInterval = (31 / totalMsg) * 1000;
    const chatContain = $('#chat');
    const time = setInterval(() => {
      chatContain.children().eq(index).css('display', 'block');
      chatContain.animate({ scrollTop: chatContain[0].scrollHeight }, 'slow');
      index++;

      if (index > totalMsg) {
        clearTimeout(time);
      }
    }, timeInterval);
  }

  render() {
    const names = chatJson.data.map((msg) => { //eslint-disable-line
      return (<div className={styles.message} key={msg.id}>
        <span className={styles.user}>{msg.attributes.from} </span>
        <span className={styles.text}>{msg.attributes.message}</span>
      </div>);
    });

    $(window).resize(() => {
      this.resize();
    });

    return (
      <div id="chat" className={styles.chat}>
        {names}
      </div>
    );
  }
}

export default Chat;
