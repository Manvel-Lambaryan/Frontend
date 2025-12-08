import { useState } from "react";
import "./todoitem.css";

export const ToDoItem = ({ text, id, completed, onRemove, onToggle }) => {
    const [isRemoving, setIsRemoving] = useState(false);
    const [isToggling, setIsToggling] = useState(false);

    const handleRemove = () => {
        setIsRemoving(true);

        setTimeout(() => {
            onRemove(id);
        }, 300); 
    };

    const handleToggle = () => {
        setIsToggling(true);

        setTimeout(() => setIsToggling(false), 250);        
        onToggle(id);
    };

    return (
        <div
            className={`todo-item 
                ${completed ? "completed" : ""} 
                ${isRemoving ? "removing" : ""} 
                ${isToggling ? "toggled" : ""}
            `}
        >
            <span className="todo-text">{text}</span>

            <div className="actions">
                <button className="toggle-btn" onClick={handleToggle}>
                    {completed ? "Undo" : "Done"}
                </button>

                <button className="delete-btn" onClick={handleRemove}>
                    Delete
                </button>
            </div>
        </div>
    );
};
