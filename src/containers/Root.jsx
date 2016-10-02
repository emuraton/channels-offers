import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import Catalogue from 'components/Catalogue'

const mapStateToProps = (state) => {
  return {
    packagesChannels: state.catalogue.get('packagesChannels'),
    customer: state.catalogue.get('customer'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const Root = connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalogue);

export default Root;
