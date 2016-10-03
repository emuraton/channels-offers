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
      return addChannel(state, action.channel);

    case types.REMOVE_FROM_BASKET:
      return removeChannel(state, action.channel);
    default:
      return state;
  }
}


function addChannel(state, channel) {
  return state.updateIn(['basket'], channels => channels.push(channel));
}

function removeChannel(state, channel) {
  let indexToRemove = state.get('basket').findIndex(c => c.id === channel.id);
  return state.updateIn(['basket'], channels => channels.delete(indexToRemove));
}
