/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';
import styles from './styles.css';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';


function App(props) {
  const path = props.location.pathname;
  return (
    <div>
      <div className={styles.wrapper}>
        <Helmet
          titleTemplate="%s - TwitchClips"
          defaultTitle="TwitchClips"
          meta={[{ name: 'description', content: 'Watch your favorite twitch clips' }]}
        />
        <Navbar location={path} />
        {React.Children.toArray(props.children)}
      </div>
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
  dispatch: React.PropTypes.func,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(App);
