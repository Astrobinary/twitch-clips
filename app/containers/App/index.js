import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import firebase from 'firebase/app';
import 'firebase/database';

import 'sanitize.css/sanitize.css';
import styles from './styles.css';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

const config = {
  apiKey: 'AIzaSyCF8ldxMh8xvxwxs--ljoyFxlWi5YTDb08',
  authDomain: 'clip-project-272f7.firebaseapp.com',
  databaseURL: 'https://clip-project-272f7.firebaseio.com',
  storageBucket: 'clip-project-272f7.appspot.com',
};

class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <div className={styles.wrapper}>
          <Helmet
            titleTemplate="%s - TwitchClips"
            defaultTitle="TwitchClips"
            meta={[{ name: 'description', content: 'Watch your favorite twitch clips' }]}
          />
          <Navbar location={path} />
          {React.Children.toArray(this.props.children)}
        </div>
        <Footer />
      </div>
    );
  }

}

App.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
  location: React.PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(App);
