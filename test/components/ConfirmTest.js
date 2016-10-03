import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import Confirm from 'components/Confirm';

const stubBasket = {
  channels: [
   {
      id: 'arsenal-tv-london',
      name: 'Arsenal TV'
    },
    {
      id: 'chelsea-tv-london',
      name: 'Chelsea TV'
    }
  ]
};

describe('<Confirm>', function() {
  const wrapper = shallow(<Confirm basket={stubBasket.channels}/>);

  it('Should have 1 title', function() {
    const categoryFound = wrapper.find('h2');
    expect(categoryFound).to.have.length(1);
    expect(categoryFound.text()).to.equal('Selected products:');
  });

  it('Should have 2 products', function() {
    const channelsFound = wrapper.find('p');
    expect(channelsFound).to.have.length(stubBasket.channels.length);
    channelsFound.map((channel, index) => {
      expect(channel.text()).to.equal(stubBasket.channels[index].name);
    });
  });
});
