import * as actionTypes from './actionTypes';
import {CALL_API} from '../middleware/api';

/**
 * Save in the store the customerID
 */
export function saveInStoreCustomerID(customerId) {
  return dispatch => {
    dispatch({
      type: actionTypes.SAVE_INSTORE_CUSTOMERID,
      customerId
    });
  };
}
