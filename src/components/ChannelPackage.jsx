import React, {Component, PropTypes} from 'react';
import {upperFirst} from 'lodash';

/* 
*   Inline style
*/
const styles = {
  article: {
    border: '1px solid #d9d9d9',
    padding: '0px 10px 30px 10px',
  },
  category: {
    fontWeight: 'bold',
  },
  label: {
    display : 'block',
    marginBottom: '30px',
  },
  checkout: {
    textAlign: 'center',
    fontSize: '20px',
  },
};

class ChannelPackage extends Component {
  constructor(props) {
    super(props);
  }

  _showChannels = () => {
    const {actions, channels} = this.props;
    let component = this;
    return channels.map((channel, index) => {
      return (
        <label key={index} style={styles.label}>
          <input type='checkbox' key={channel.id} onChange={(e) => e.target.checked ? actions.addChannelInBasket(channel) : actions.removeChannelFromBasket(channel)}/>
          {channel.name}
        </label>);
    });
  }

  _showCheckout = () => {
    const {isLastOne} = this.props;
    return (isLastOne ? <button type="submit" id='checkout' style={styles.checkout}>Checkout</button> : <span></span>);
  }

  render() {
    const {category, channels} = this.props;

    return (
      <article style={styles.article}>
        <h2 style={styles.category}>{upperFirst(category)}</h2>
        <div>
          {this._showChannels()}
          {this._showCheckout()}
        </div>
      </article>
    );
  }
}

ChannelPackage.propTypes = {
  actions: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  isLastOne: PropTypes.bool,
}

export default ChannelPackage;
