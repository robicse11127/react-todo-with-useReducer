import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { isEmpty } from "lodash";

const AddTodo = () => {
	const [ title, setTitle ] = useState( '' );
	const [ todos, dispatch ] = useContext( TodoContext ); /* eslint-disable-line */

	// On press the add button add items in the list.
	const handleSubmit = (e) => {
		e.preventDefault();
		const todoField = document.getElementById( 'add-new-todo' );

		if ( isEmpty( todoField.value ) ) {
			return;
		}

		dispatch({
			type: 'add_todo_item',
			id: Date.now(),
			title,
			done: false
		});

		setTitle( '' );
	}

	// On Press Enter Add items.
	const onPressEnter = (e) => {
		if ( 13 === e.keyCode ) {
			handleSubmit(e);
		}
	}

	return (
		<div className="input-group">
			<input
				type="text"
				value={ title }
				onChange={ (e) => setTitle( e.target.value )}
				onKeyDown={ onPressEnter }
				placeholder="What do you need to do?"
				className="form-control add-new-todo"
				id="add-new-todo"
				autoFocus
			/>
			<div className="input-group-append">
				<button
					type="button"
					className="btn btn-success"
					onClick={ handleSubmit }
				>
					<span
						style={{
							fontSize: "24px",
							lineHeight: "16px",
						}}
					>
						+
					</span>
				</button>
			</div>
		</div>
	)
}

export default AddTodo;