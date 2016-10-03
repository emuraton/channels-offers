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

  // For this code we presume customer is already logged, so we'll stub his cookie.
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
    //Fetch customer location (must be done when we have the customerID)
    if (customer.get('id') && !customer.get('location')) actions.fetchCustomerLocation(customer.get('id'));
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
  actions: PropTypes.object.isRequired,
  customer: PropTypes.object,
  packagesChannels: PropTypes.array,
}

export default Catalogue;
