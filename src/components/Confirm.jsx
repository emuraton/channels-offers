import React, {Component, PropTypes} from 'react';
import {upperFirst} from 'lodash';

/*
*   Inline style
*/
const styles = {
  h2: {
    fontWeight: 'bold',
  },
};

class Confirm extends Component {
  constructor(props) {
    super(props);
  }

  _showChannels = () => {
    const {basket} = this.props;
    return basket.map((channel, index) => {
      return <p key={channel.id}>{channel.name}</p>;
    });
  }

  render() {
    return (
      <article style={styles.article}>
        <div>
          <h2 style={styles.h2}>Selected products:</h2>
          {this._showChannels()}
        </div>
      </article>
    );
  }
}

Confirm.propTypes = {
  basket: PropTypes.object.isRequired,
}

export default Confirm;
