import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        if(input !== ""){
            dispatch(addTodo({text:input}))
            setInput('')
        }
    }

    return (
        <div className="mb-4">
            <form onSubmit={(e)=> addTodoHandler(e)} className="flex items-center">
                <input
                    type="text"
                    placeholder="todo"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-l-md bg-gray-900 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white font-semibold rounded-r-md hover:bg-green-700 transition"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo
