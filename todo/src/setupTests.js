// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import Todo from "./Todo";
import TodoList from "./TodoList"
import NewTodoForm from "./NewTodoForm"

// smoke tests
test('it renders without crashing', () => {
    render(<Todo />);
    });   
  // snapshot tests
it("matches Carousel snapshot", function(){
    const {asFragment} = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  })


// smoke tests
test('it renders without crashing', () => {
    render(<TodoList />);
    });   
// snapshot tests
it("matches Carousel snapshot", function(){
    const {asFragment} = render(<TodoList />);
    wexpect(asFragment()).toMatchSnapshot();
  })

// smoke tests
test('it renders without crashing', () => {
    render(<NewTodoForm />);
    });   
// snapshot tests
it("matches Carousel snapshot", function(){
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
  })