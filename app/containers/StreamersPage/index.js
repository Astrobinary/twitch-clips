import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styles from './styles.css';

import Item from 'components/StreamerItem';

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
        <Item />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapDispatchToProps)(StreamersPage);
