import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Issues from '../issues.js';
import Comments from '../comments.js';


describe('Dummy test - should always pass', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe("Issues Component", () => {
  it("should render Issues component", () => {

    const wrapper = shallow(<Issues />);
  });
  it("shoud have a div element ", () => {
    const wrapper = shallow(<Issues/>);
    expect(wrapper.find("div").length).to.equal(2);
  })
});

describe("Comments component", () => {
  let props;
  let mountedComments;
  const comments = () => {
    if (!mountedComments) {
      mountedComments = mount(
        <Comments {...props} />
      );
    }
    return mountedComments;
  }

  beforeEach(() => {
    props = {
      params: undefined,
    };
    mountedComments = undefined;
  });
  
  // ....
});