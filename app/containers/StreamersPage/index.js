import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

import Item from 'components/StreamerItem';
import Search from 'components/Search';


export class StreamersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.streamersPage}>
        <Helmet
          title="Streamers"
          meta={[
            { name: 'description', content: 'Description of StreamersPage' },
          ]}
        />
        <Search />
        <Item />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapDispatchToProps)(StreamersPage);
