/**
 * AddToDo Reducer Function.
 * @param {*} todos array Todo list array.
 * @param {*} action Object List of actions comes through.
 * @returns
 */
const TodoReducer = (todos, action) => {
	switch( action.type ) {
		case 'add_todo_item': {
			const newTodos = [
				...todos,
				{
					id: action.id,
					title: action.title,
					done: action.done
				}
			]
			localStorage.setItem( "et-todos", JSON.stringify( newTodos ) );
			return newTodos;
		}
		case 'done_or_not_done': {
			const updatedTodos = todos.filter( (todo) => {
				if ( parseInt( action.id, 10 ) === todo.id ) {
					todo.done = false;
					if ( action.checked ) {
						todo.done = true;
					}
					return todo;
				}
				return todo;
			} );
			localStorage.setItem( "et-todos", JSON.stringify( updatedTodos ) );
			return updatedTodos;
		}
		case 'delete_todo': {
			const filteredTodo = todos.filter( ( item ) => {
				return item.id !== parseInt( action.id, 10 )
			} );

			localStorage.setItem( "et-todos", JSON.stringify( filteredTodo ) );
			return filteredTodo;
		}
		default: {
			throw Error( 'Unknown action: ' + action.type );
		}
	}
}

export default TodoReducer;