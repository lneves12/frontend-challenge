import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
