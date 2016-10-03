import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai';
import ChannelPackage from 'components/ChannelPackage';

const stubchannels =
{
  category: "Basket",
  channels: [
    {
      id: "arsenal-tv-basket",
      location: "london",
      name: "Arsenal TV"
    },
    {
      id: "sky-sports-basket",
      name: "Sky Sports News"
    }
  ]
};

describe("<ChannelPackage>", function() {
  const wrapper = shallow(<ChannelPackage channels={stubchannels.channels} category={stubchannels.category} isLastOne={true}/>);

  it("Should have 1 category : basket", function() {
    const categoryFound = wrapper.find('h2');
    expect(categoryFound).to.have.length(1);
    expect(categoryFound.text()).to.equal(stubchannels.category);
  });

  it("Should have 2 channels : Arsenal TV / Sky Sports News", function() {
    const channelsFound = wrapper.find('label');
    expect(channelsFound).to.have.length(stubchannels.channels.length);
    channelsFound.map((channel, index) => {
      expect(channel.text()).to.equal(stubchannels.channels[index].name);
    });
  });

  it("Should show checkout button", function() {
    expect(wrapper.find('#checkout')).to.have.length(1);
  });
});
