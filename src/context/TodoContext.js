import { useReducer } from "react";
import { createContext } from "react";
import TodoReducer from "../reducers/TodoReducer";

export const TodoContext = createContext();

export const TodoContextProvider = ( props ) => {
	const items = JSON.parse( localStorage.getItem( 'et-todos' ) );
	const [ todos, dispatch ] = useReducer( TodoReducer, items !== null ? items : [] );

	return (
		<TodoContext.Provider value={[ todos, dispatch ]}>
			{ props.children }
		</TodoContext.Provider>
	);
}