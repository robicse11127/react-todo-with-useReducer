import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
	const [ todos ] = useContext( TodoContext );

	const items = todos.map( ( todo, index ) => {
		return (
			<TodoItem key={ index } todo={todo} index={index}  />
    	);
	} );

	return (
		<ul className="list-group todo-list">{ items }</ul>
	);
}

export default TodoList;
