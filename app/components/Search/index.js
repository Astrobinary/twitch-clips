import React from 'react';

import styles from './styles.css';
import searchSVG from 'components/Navbar/search.svg';

class Search extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.search}>
        <img src={searchSVG} alt="searchSVG" /> <input placeholder="enter streamer name" />
      </div>
    );
  }
}

export default Search;
