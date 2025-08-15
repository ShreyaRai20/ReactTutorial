import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import { store } from "./store/store"

function TodoPage() {
    return (
        <Provider store={store}>
            <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 p-6">
                <h1 className="text-4xl font-bold text-yellow-400 mb-6">Todo App</h1>
                <div className="w-full max-w-md space-y-4">
                    <AddTodo />
                    <TodoList />
                </div>
            </div>
        </Provider>
    )
}

export default TodoPage
