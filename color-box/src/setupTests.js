// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import {Box} from "./Box";
import {BoxList} from "./BoxList"
import {NewBoxForm} from "./NewBoxForm"

// smoke tests
test('it renders without crashing', () => {
    render(<Box />);
    });   
  // snapshot tests
it("matches Box snapshot", function(){
    const {asFragment} = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
  })


// smoke tests
test('it renders without crashing', () => {
    render(<BoxList />);
    });   
// snapshot tests
it("matches BoxList snapshot", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  })

// smoke tests
test('it renders without crashing', () => {
    render(<NewBoxForm />);
    });   
// snapshot tests
it("matches NewBoxForm snapshot", function(){
    const {asFragment} = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  })