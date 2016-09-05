import React from 'react';
import styles from './styles.css';
import Item from 'components/Item';

class List extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      const streamers = this.props.data.map((streamer, index) => { //eslint-disable-line
        return <Item streamer={streamer} key={index} />;
      });
    return (
      <div className={styles.list}>
        {streamers}
      </div>
    );
  }
}


List.propTypes = {
  names: React.PropTypes.array,
  avatars: React.PropTypes.array,
  dispatch: React.PropTypes.func,
};



export default List;
