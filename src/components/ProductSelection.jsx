import React, {Component, PropTypes} from 'react';
import ChannelPackage from './ChannelPackage';
import Confirm from 'containers/Confirm';
import {getCookie, setCookie} from 'utils/utils'

/*
*   Inline style
*/
const styles = {
  form: {
    display : 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexGrow: 1,
  },
  mainDiv: {
    width : '60%',
    margin: 'auto',
  },
};

class ProductSelection extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions, customerLocation, packagesChannels} = this.props;
    //Fetch channels available
    if(!packagesChannels) actions.fetchChannelsPackage(customerLocation);
  }

  /*
  * Get packages channels and show checkout button if it's the last element.
  */
  _showPackages = () => {
    const {actions, packagesChannels} = this.props;

    if(packagesChannels) {
      return packagesChannels.map((pack, index, tab) => {
        let isLastOne = index === (tab.length-1);
        return <ChannelPackage key={index} channels={pack.channels} category={pack.category} isLastOne={isLastOne} actions={actions}/>;
      });
    }
  }

  _handleSubmit = (e) => {
    // actions
    e.preventDefault();
    this.props.changeContextViewPanel(<Confirm/>);

  }

  render() {
    return (
      <div style={styles.mainDiv}>
        <form onSubmit={this._handleSubmit} style={styles.form}>
          {this._showPackages()}
        </form>
      </div>
    );
  }
}

ProductSelection.propTypes = {
  actions: PropTypes.object.isRequired,
  customerLocation: PropTypes.string,
  packagesChannels: PropTypes.array,
}

export default ProductSelection;
