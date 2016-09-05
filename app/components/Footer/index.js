import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import styles from './styles.css';

function Footer(props) {
  const feedRoute = () => {
    props.dispatch(push('/'));
  };
  const streamersRoute = () => {
    props.dispatch(push('/streamers'));
  };
  const gamesRoute = () => {
    props.dispatch(push('/games'));
  };
  const aboutRoute = () => {
    props.dispatch(push('/about'));
  };

  return (
    <footer className={styles.footer}>
      <ul>
        <a onClick={feedRoute}><li>feed</li></a>
        <a onClick={streamersRoute}><li>streamers</li></a>
        <a onClick={gamesRoute}><li>games</li></a>
        <a onClick={aboutRoute}><li>about</li></a>
        <a href="https://twitter.com/_BrandonPadilla" target="_blank"><li>twitter</li></a>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  dispatch: React.PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Footer);
