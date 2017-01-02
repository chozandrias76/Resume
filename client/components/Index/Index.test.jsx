jest.dontMock('./Index.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var Index = require('./Index.jsx').default;

describe('IndexComponent', () => {

  it('should render', () => {

    var componentInstance = TestUtils.renderIntoDocument(<Index />);
    var indexItems = TestUtils.scryRenderedDOMComponentsWithTag(componentInstance, 'li');

    expect(indexItems).toEqual(indexItems);
  });



});
