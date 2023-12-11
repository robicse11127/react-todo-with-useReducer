import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import App from "./App";
import React from "react";
import userEvent from "@testing-library/user-event";

describe( "Todo list", () => {

	test("renders todo app", () => {
		render(<App />);
		const title = screen.getByText(/ToDo/i);
		expect(title).toBeInTheDocument();
	});
	
	test( "Should contain input field and foucs on load", () => {
		render(<App />);
		const inputField = screen.getByPlaceholderText(/What do you need to do\?/i);
		expect( inputField ).toHaveFocus();
	} );
	
	test( "add todo field can not be empty", () => {
		const { container } = render(<App />);
		const addTodoField = container.querySelector( ".add-new-todo" );
		const addTodoBtn = container.querySelector( ".btn-success" );
		userEvent.click( addTodoBtn, addTodoField );
		expect( addTodoField.value ).not.toBe(" ");
	} );
	
	
	test( "adds new todos", () => {
		const { container } = render(<App />);
	
		const todoText = "say hello to the world";
		fireEvent.change(screen.getByPlaceholderText(/What do you need to do\?/i), {
			target: { value: todoText },
		});
	
		expect(container.querySelector(".add-new-todo").value).toContain(todoText);
	
		fireEvent.click(screen.getByText(/\+/i));
	
		expect(container.querySelector(".todo-list").textContent).toContain(todoText);
		expect(container.querySelector(".add-new-todo").value).not.toContain(
			todoText
		);
	});
	
	test( "check localStorage not be null", () => {
		render(<App />);
		const todos = localStorage.getItem( 'et-todos' ) ;
		expect( todos ).not.toBe( undefined || null || ' ');
	} );

	test( "delete a todo item", () => {
		const { container } = render(<App />);
	
		const todoText = "say hello to the world";
		expect(container.querySelector(".todo-list").textContent).toContain(todoText);
		userEvent.click(screen.getByTestId(`delete-0`));
		expect(container.querySelector(".todo-list").textContent).not.toContain(todoText);
	} );
} )