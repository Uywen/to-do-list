import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import renderer  from "react-test-renderer";

test("my First snapShot", () =>{
  const component=renderer
  .create(
    <App />
  );
  let tree=component.toJSON();
  expect(tree).toMatchSnapshot();
})
