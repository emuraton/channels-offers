import { logoutUser } from '../actions';
import {camelizeKeys} from 'humps';
import {set} from 'lodash';
import 'isomorphic-fetch';

// const API_ROOT = `${window.APP_CONFIG.API_PROTOCOL}://${window.APP_CONFIG.API_HOST}:${window.APP_CONFIG.API_PORT}/${window.APP_CONFIG.API_CONTEXT}/${window.APP_CONFIG.API_VERSION}/`;

// Fetches an API response and normalizes the result JSON.
function callApi(endpoint, options = {}) {

//  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  let fullUrl = 'http://localhost:3001/' + endpoint;

  return fetch(fullUrl, options)
    .then((response) =>
      response.json().then((json) => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject({ json, response });
      }

      const camelizedJson = camelizeKeys(json);
      return Object.assign({}, camelizedJson);

    });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default (store) => (next) => (action) => {

  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, options } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every((type) => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  // dispatch requestType action with endpoint parameter for currentCall
  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType, endpoint }));

  //TODO LATER
  // Provide 'Authorization' header
  // set(options, 'headers.Authorization', `Bearer ${store.getState().auth.access_token}`);

  return callApi(endpoint, options).then(
    // dispatch API CALL successType
    (response) => next(actionWith({
      response,
      endpoint,
      type: successType
    })),
    ({ json, response }) => {
      next(actionWith({
        endpoint,
        type: failureType,
        error: json.message || 'Something bad happened'
      }));
    }
  );

};
