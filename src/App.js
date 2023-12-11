import { TodoContextProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
export default function App () {

	return (
		<TodoContextProvider>
			<div id="app" className="container">
				<div className="row">
					<div className="col col-md-6 offset-md-3 mt-2">
						<div className="todos-app card">
							<div className="todos-app-header card-header">
								<h2>ToDo</h2>
								<AddTodo />
							</div>
							<div className="card-body">
								<TodoList />
							</div>
						</div>
					</div>
				</div>
			</div>
		</TodoContextProvider>
	);
}