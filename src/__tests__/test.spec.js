import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Issues from '../issues.js';
import Comments from '../comments.js';
import { mount } from 'enzyme';
import Github from '../github';
import { MemoryRouter } from 'react-router'; 

describe('Dummy test - should always pass', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe("< Issues />", () => {
  it("should render Issues component", () => {
    const wrapper = shallow(<Issues />);
  });

  it("shoud have 2 div element ", () => {
    const wrapper = shallow(<Issues/>);
    expect(wrapper.find("div").length).to.equal(2);
  });
});




describe('< Issues />', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Issues/>
    </MemoryRouter>
  );

  it("shoud have a Issues text ", () => {
    expect(wrapper.find("div").first().text()).to.have.string('Issues');
  });
});

describe('< Comments />', () => {
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/','/comments/1234']}>
      <Comments
      />
    </MemoryRouter>
  );

  it('renders a Comments compnent ', () => {
    expect(wrapper.html()).to.equal('<div>Comments<div class="CommentsTable"><ul></ul></div></div>');
  });
});