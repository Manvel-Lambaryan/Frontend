import { ToDoItem } from "./ToDoItem";

export const List = ({ items, onRemove, onToggle }) => {
    return (
        <div className="list">
            {items.map(todo => (
                <ToDoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};
