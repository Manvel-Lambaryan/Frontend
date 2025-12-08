import { useState } from "react";

export const AddToDo = ({ onAdd }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim() === "") return;
        onAdd(value);
        setValue("");
    };

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    );
};
