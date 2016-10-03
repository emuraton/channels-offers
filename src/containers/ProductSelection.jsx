import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import ProductSelectionComponent from 'components/ProductSelection'

const mapStateToProps = (state) => {
  return {
    packagesChannels: state.catalogue.get('packagesChannels'),
    customerLocation: state.catalogue.get('customer').get('location'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const ProductSelection = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSelectionComponent);

export default ProductSelection;
