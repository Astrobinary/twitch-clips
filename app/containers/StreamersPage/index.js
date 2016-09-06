import React from 'react';
import { connect } from 'react-redux';
import selectStreamersPage from './selectors';
import styles from './styles.css';
import ripple from './ripple.svg';
import List from 'components/List';
import { loadStreamers } from './actions';
import searchSVG from 'components/Navbar/search.svg';
import $ from 'jquery';


export class StreamersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    this.state = { search: '' };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.foucsInput = this.foucsInput.bind(this);
  }

  componentWillMount() {
    if (this.props.streamers.length === 0) {
      this.props.loadStreamers();
    }
  }

  onChangeSearch(e) {
    this.setState({ search: e.target.value });
  }

  foucsInput() {
    $('html, body').animate({
      scrollTop: $('#nameInput').offset().top - 200,
    }, 1000);
    $('#nameInput').focus();
  }
  render() {
    let content = null;
    let more = null;

    let limitStreamers = [];
    if (this.state.search === null || this.state.search === '') {
      if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
        limitStreamers = this.props.streamers.slice(0, 50);
      } else {
        limitStreamers = this.props.streamers.slice(0, 150);
      }
    } else {
      limitStreamers = this.props.streamers;
    }
    const value = this.state.search !== null ? this.state.search : '';
    let filterStreamers = limitStreamers.filter((streamer) => {
      return streamer.name.indexOf(value.toLowerCase()) !== -1;
    });

    if (this.props.loading) {
      content = (<div className={styles.loading}><img src={ripple} alt="loading" /></div>);
    } else {
      content = <List data={filterStreamers} />;
    }

    if (this.state.search === '' && !this.props.loading) {
      more = <div className={styles.more} onClick={this.foucsInput}>search for more</div>;
    }
    return (
      <div className={styles.streamersPage}>
        <div className={styles.search}>
          <img src={searchSVG} alt="searchSVG" /> <input id="nameInput" value={this.state.search} onChange={this.onChangeSearch} placeholder="enter streamer name" />
        </div>
        {content}
        {more}
      </div>

    );
  }
}

StreamersPage.propTypes = {
  streamers: React.PropTypes.array,
  loadStreamers: React.PropTypes.func,
  loadAvatar: React.PropTypes.func,
  loading: React.PropTypes.bool,
  dispatch: React.PropTypes.func,
};

const mapStateToProps = selectStreamersPage();

function mapDispatchToProps(dispatch) {
  return {
    loadStreamers: () => dispatch(loadStreamers()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StreamersPage);
