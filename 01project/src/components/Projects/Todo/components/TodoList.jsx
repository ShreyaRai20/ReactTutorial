import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from "../features/todo/todoSlice"

function TodoList() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const removeTodoHandler = (e,id) =>{
        e.preventDefault()
        dispatch(removeTodo({id : id}))
    }

    return (
        <div>
            <div className="text-2xl font-bold text-yellow-400 mb-3">Todo</div>
            {Array.isArray(todos) && todos.map(todo=>(
                <li
                    key={todo.id}
                    className="flex justify-between items-center mb-2 p-2 rounded-md bg-gray-800"
                >
                    <span className="text-yellow-400">{todo.text}</span>
                    <button
                        onClick={(e)=>{removeTodoHandler(e,todo.id)}}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                        X
                    </button>
                </li>
            ))}
        </div>
    )
}

export default TodoList
