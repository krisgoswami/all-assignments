import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        id: "",
        title: "",
        description: "",
    });
    // fetch all todos from server

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos");
            setTodos(response.data);
        } catch (err) {
            console.error("Error fetching todos", err);
        }
    };

    const createTodo = async () => {
        try {
            await axios.post("http://localhost:3000/todos", newTodo);
            setNewTodo({ id: "", title: "", description: "" });
            fetchTodos();
        } catch (err) {
            console.error("Error creating todo", err);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todos/${id}`);
            fetchTodos();
        } catch (err) {
            console.error("Error deleting todo", err);
        }
    };

    return (
        <>
            <div>
                <h1>Easy Todo App</h1>
                <input
                    type="text"
                    value={newTodo.title}
                    onChange={(e) =>
                        setNewTodo({ ...newTodo, title: e.target.value })
                    }
                    placeholder="title"
                />
                <input
                    type="text"
                    value={newTodo.description}
                    onChange={(e) =>
                        setNewTodo({ ...newTodo, description: e.target.value })
                    }
                    placeholder="description"
                />
                <button onClick={createTodo}>Add TODO</button>
                {todos.map((todo) => {
                    return (
                        <>
                            <Todo
                                key={todo.id}
                                title={todo.title}
                                description={todo.description}
                            ></Todo>
                            <button onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </>
                    );
                })}
            </div>
        </>
    );
}

function Todo(props) {
    // Add a delete button here so user can delete a TODO.
    return (
        <div>
            <b>{props.title}</b> - {props.description}
        </div>
    );
}

export default App;
