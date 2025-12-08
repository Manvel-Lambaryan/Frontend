import { useState, useEffect } from "react";
import { AddToDo } from "./AddToDo";
import { List } from "./List";
import "./todo.css";

export const ToDoList = () => {

    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [
            { id: 101, text: "Go to the gym", completed: false },
            { id: 102, text: "Read a book", completed: true },
            { id: 103, text: "Eat something", completed: false }
        ];
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (text) => {
        setTodos([
            ...todos,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <h1 className="title">My Tasks</h1>

            <div className="todo-card">
                <AddToDo onAdd={addTodo} />

                <List 
                    items={todos}
                    onRemove={removeTodo}
                    onToggle={toggleTodo}
                />

                {todos.length === 0 && (
                    <p className="empty">🎉 Բոլոր գործերը ավարտված են!</p>
                )}
            </div>
        </div>
    );
};
