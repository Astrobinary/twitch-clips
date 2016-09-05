import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import styles from './styles.css';
import logo from './logo.svg';
import loginSVG from './log-in.svg';
import searchSVG from './search.svg';

export class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
    const pathName = this.props.location;
    this.state = { active: pathName };
  }

  changeRoute(e) {
    const route = e.currentTarget.title;
    this.props.dispatch(push(`/${route}`));
  }

  render() {
    const showVideo = () => {
      this.props.dispatch(push('/video'));
    };

    const location = this.props.location;
    return (
      <div>
        <nav className={styles.largeNav}>
          <ul className={styles.menu}>
            <div className={styles.logo_container} onClick={showVideo}>
              <img className={styles.logo} src={logo} alt={'logo'} />
            </div>
            <div className={location === '/' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="">feed</div>
            <div className={location === '/streamers' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="streamers">streamers</div>
            <div className={location === '/games' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="games">games</div>
            <div className={location === '/about' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="about">about</div>
            <div className={styles.link} className={styles.inputBox}>
              <img src={searchSVG} alt="search-svg" className={styles.svgIcon}></img>
              <input></input>
            </div>
            <button className={styles.login_button} onClick={this.changeRoute}>
              <img src={loginSVG} alt="login-svg" className={styles.svgIcon}></img>login
            </button>
          </ul>
        </nav>
        <nav className={styles.smallNav}>
          <ul className={styles.menu}>
            <div className={styles.logo_container} onClick={showVideo}>
              <img className={styles.logo} src={logo} alt={'logo'} />
            </div>
            <div className={this.props.location === '/feed' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="feed">feed
            </div>
            <div className={this.props.location === '/streamers' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="streamers">streamers
            </div>
            <div className={this.props.location === '/games' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="games">games
            </div>
            <div className={this.props.location === '/about' ? styles.link_selected : styles.link} onClick={this.changeRoute} title="about">about
            </div>
          </ul>
        </nav>
      </div>

  );
  }
}

Navbar.propTypes = {
  dispatch: React.PropTypes.func,
  location: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}


export default connect(mapDispatchToProps)(Navbar);
