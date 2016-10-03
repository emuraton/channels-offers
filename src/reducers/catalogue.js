import {List, Map, UpdateIn} from 'immutable';
import * as types from 'actions/actionTypes';
import {initialState} from './init';


export default (state = initialState, action) => {
  switch (action.type){
    case types.SAVE_INSTORE_CUSTOMERID:
      return state.updateIn(['customer', 'id'], val => action.customerId)

    case types.LOCATION_SUCCESS:
      return state.updateIn(['customer', 'location'], val => action.response.location)

    case types.CHANNELS_PACKAGES_SUCCESS:
      return state.set('packagesChannels', action.response.channelsPackages);

    case types.ADD_IN_BASKET:
      return addChannel(state, action.channelId);

    case types.REMOVE_FROM_BASKET:
      return removeChannel(state, action.channelId);
    default:
      return state;
  }
}


function addChannel(state, channelId) {
  return state.updateIn(['basket'], channels => channels.push(channelId));
}

function removeChannel(state, channelId) {
  let indexToRemove = state.get('basket').indexOf(channelId);
  return state.updateIn(['basket'], channels => channels.delete(indexToRemove));
}
