import React, {Component, PropTypes} from 'react';
import StubNavBar from './StubNavBar';
import StubFooter from './StubFooter';
import ProductSelection from 'containers/ProductSelection';
import ChannelPackage from './ChannelPackage';
import {getCookie, setCookie} from 'utils/utils'

class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.state = {currentContextView: ''};
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
    const {currentContextView} = this.state;
    //Fetch customer location (must be done when we have the customerID)
    if (customer.get('id') && !customer.get('location')) actions.fetchCustomerLocation(customer.get('id'));

    //TODO : replace it by react-router
    if(currentContextView ==='' && customer.get('location')){
      this._changeContextViewPanel(this._showProductSelection());
    }
  }

  _showProductSelection = () => {
    const {actions, customer, packagesChannels} = this.props;
    if (customer) {
      return (<ProductSelection changeContextViewPanel={this._changeContextViewPanel.bind(this)}/>);
    }
  }

  //TODO : replace it by react-router
  /**
	* Change the current context view
	*/
	_changeContextViewPanel(context) {
		this.setState({
			currentContextView : context
		})
	}

  render() {
    return (
      <div>
        <StubNavBar/>
          {this.state.currentContextView}
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
