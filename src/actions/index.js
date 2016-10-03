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

export function addChannelInBasket(channel) {
  return dispatch => {
    dispatch({
      type: actionTypes.ADD_IN_BASKET,
      channel: channel,
    });
  };
}

export function removeChannelFromBasket(channel) {
  return dispatch => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      channel: channel,
    });
  };
}

export function fetchCustomerLocation(customerId) {
  return {
    [CALL_API]: {
      types: [ actionTypes.LOCATION_REQUEST, actionTypes.LOCATION_SUCCESS, actionTypes.LOCATION_FAILURE ],
      endpoint: 'customer/location',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `{"customerId": ${customerId}}`,
      },
    }
  };
}

export function fetchChannelsPackage(customerLocation) {
  return {
    [CALL_API]: {
      types: [ actionTypes.CHANNELS_PACKAGES_REQUEST, actionTypes.CHANNELS_PACKAGES_SUCCESS, actionTypes.CHANNELS_PACKAGES_FAILURE ],
      endpoint: 'channels/packages',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `{"customerLocation": ${customerLocation}}`,
      },
    }
  };
}
