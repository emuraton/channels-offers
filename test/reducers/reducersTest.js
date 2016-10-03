import {expect} from 'chai';
import {Map} from 'immutable';
import reducer from '../../src/reducers/catalogue';
import * as types from '../../src/actions/actionTypes';

const stubData = Map(
{
  basket: [
    {
      id: 'arsenal-tv-basket',
      name: 'Arsenal TV'
    },
    {
      id: 'sky-sports-basket',
      name: 'Sky Sports News'
    },
  ]
});
const addData = {id: 'testId', name: 'testName'};
const removeData = {id: 'sky-sports-basket', name: 'Sky Sports News'};

describe('Test reducers', function() {
  it('Should add a channel', function() {
    const action = {type : types.ADD_IN_BASKET, channel: addData};
    expect(reducer(stubData, action).get('basket')).to.equal(3);
  });

  it('Should remove a channel', function() {
    /* STUB test */
  });
});
