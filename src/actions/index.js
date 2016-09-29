import * as actionTypes from './actionTypes';

/**
 * Initialize a new game.
 */
export function myAction() {
  return dispatch => {
    dispatch({
      type: actionTypes.MY_ACTION,
    });
  };
}
