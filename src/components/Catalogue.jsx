import React, {Component, PropTypes} from 'react';
import StubNavBar from './StubNavBar';
import StubFooter from './StubFooter';
import ProductSelection from './ProductSelection';
import ChannelPackage from './ChannelPackage';
import {getCookie, setCookie} from 'utils/utils'

class Catalogue extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions} = this.props;
    //To make it faster, i'll act as if the cookie is not crypted
    setCookie('customerID', '123456', '1');
    let customerId = getCookie('customerID');
    //Put it in a state, so we don't have to decrypt the cookie everytime we want to use it
    actions.saveInStoreCustomerID(customerId);

  }

  componentDidUpdate() {
    const {actions, customer} = this.props;
    if (!customer.get('location')) actions.fetchCustomerLocation(customer.get('id'));
  }

  _showProductSelection = () => {
    const {actions, customer, packagesChannels} = this.props;
    if (customer) {
      return (<ProductSelection
                packagesChannels={packagesChannels}
                customerLocation={customer.get('location')}
                actions={actions}/>);
    }
  }

  render() {
    return (
      <div>
        <StubNavBar/>
          {this._showProductSelection()}
        <StubFooter/>
      </div>
    );
  }
}

Catalogue.propTypes = {
  customer: PropTypes.object.isRequired,
}

export default Catalogue;
