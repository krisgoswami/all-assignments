import React, { useState } from "react";
import axios from "axios";

export default TodoList = () => {
    const [newTodo, setNewTodo] = useState({
        id: "",
        title: "",
        description: "",
    });

    const createTodo = async ({fetchTodos}) => {
        try {
            await axios.post("http://localhost:3000/todos", newTodo);
            setNewTodo({ id: "", title: "", description: "" });
            fetchTodos();
        } catch (err) {
            console.error("Error creating todo", err);
        }
    };

    return (
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
        </div>
    );
};
