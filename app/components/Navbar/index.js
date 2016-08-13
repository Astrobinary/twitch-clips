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
    const route = e.currentTarget.innerText;
    this.props.dispatch(push(`/${route}`));
  }

  render() {
    return (
      <nav>
        <ul className={styles.menu}>
          <div className={styles.logo_container}onClick={this.changeRoute}>
            <img className={styles.logo} src={logo} alt={'logo'} />
          </div>
          <div className={this.props.location === '/feed' ? styles.link_selected : styles.link} onClick={this.changeRoute}>feed</div>
          <div className={this.props.location === '/streamers' ? styles.link_selected : styles.link} onClick={this.changeRoute}>streamers</div>
          <div className={this.props.location === '/games' ? styles.link_selected : styles.link} onClick={this.changeRoute}>games</div>
          <div className={this.props.location === '/about' ? styles.link_selected : styles.link} onClick={this.changeRoute}>about</div>
          <div className={styles.link} className={styles.inputBox}>
            <img src={searchSVG} alt="search-svg" className={styles.svgIcon}></img>
            <input></input>
          </div>
          <button className={styles.login_button} onClick={this.changeRoute}>
            <img src={loginSVG} alt="login-svg" className={styles.svgIcon}></img>login
          </button>
        </ul>
      </nav>
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
