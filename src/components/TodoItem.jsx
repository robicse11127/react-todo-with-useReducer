import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ( { todo, index } ) => {
	const [ todos, dispatch ] = useContext( TodoContext ); /* elslint-disable-line */

	// Handle done/undone a todo list item.
	const handleTodoDone = (e) => {
		dispatch({
			type: 'done_or_not_done',
			id: e.target.id,
			checked: e.target.checked
		});
	}

	// Handle delete a todo list item.
	const handleDeleteTodo = (e) => {
		dispatch({
			type: 'delete_todo',
			id: e.target.id
		});
	}

	/**
	 * Checkbox Compoenent.
	 * @returns void
	 */
	const Checkbox = () => {
		const attrs = {};
		attrs.checked = todo.done ? 'checked' : '';

		return (
			<div className="col-2 todo-item__checkbox">
				<input
					type="checkbox"
					id={todo.id}
					onChange={handleTodoDone}
					className="form-control"
					{...attrs}
				/>
			</div>
		)
	}

	/**
	 * Delete button component.
	 * @returns void
	 */
	const DeleteButton = () => {
		return (
			<button
				type="button"
				className="btn btn-danger"
				onClick={handleDeleteTodo}
				id={todo.id}
				data-testid={`delete-${index}`}
				style={{
					fontSize: "24px",
					lineHeight: "16px",
				}}
			>
				X
			</button>
		);
	}

	/**
	 * Todo item title component.
	 * @returns void
	 */
	const Title = () => {
		const attrs = {};
		attrs.className = todo.done ? 'completed' : 'pending';
		return (
			<div className="col-10 todo-item__title">
				<div className="d-flex justify-content-between">
					<h3 {...attrs}>{ todo.title }</h3>
					<DeleteButton />
				</div>
			</div>
		);
	}

	return (
		<li className="list-group-item todo-item" >
			<div className="row">
				<Checkbox />
				<Title />
			</div>
		</li>
	);
}

export default TodoItem;
