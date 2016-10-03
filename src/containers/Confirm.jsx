import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from 'actions'
import ConfirmComponent from 'components/Confirm'

const mapStateToProps = (state) => {
  return {
    basket: state.catalogue.get('basket'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

const Confirm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmComponent);

export default Confirm;
