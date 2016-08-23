import React from 'react';
import Clappr from 'clappr';


class ClapprPlayer extends React.Component { // eslint-disable-line react/prefer-stateless-function


  componentDidMount() {
    this.change(this.props.source);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const changed = (nextProps.source !== this.props.source);
    this.props = nextProps;
    this.state = nextState;
    if (changed) {
      this.change(nextProps.source);
    }
    return false;
  }


  componentWillUnmount() {
    this.destroyPlayer();
  }

  destroyPlayer() {
    if (this.player) {
      this.player.destroy();
    }
    this.player = null;
  }

  change(source) {
    if (this.player) {
      this.destroyPlayer();
    }
    this.player = new Clappr.Player({
      parent: this.refs.player,
      source,
      mediacontrol: {seekbar: "#E113D3", buttons: "#66B2FF"},
      hideMediaControl: false,
      autoPlay: true,

    });


    function resizePlayer() {
      const aspectRatio = 9/16,
        newWidth = document.getElementById('player-wrapper').parentElement.offsetWidth,
        newHeight = 2 * Math.round(newWidth * aspectRatio /2);
      this.player.resize({ width: newWidth, height: newHeight });
      }

      resizePlayer();
      window.onresize = resizePlayer;

  }
  render() {
    return (
      <div>
        <div ref="player"></div>
      </div>
    );
  }
}

ClapprPlayer.propTypes = {
  source: React.PropTypes.string,
};

export default ClapprPlayer;
