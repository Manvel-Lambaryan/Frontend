import { useEffect, useState } from "react";
import { User } from "./User";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [activeGender, setActiveGender] = useState("all");
  const [selectedGender, setSelectedGender] = useState("male");

  useEffect(() => {
    fetch("http://localhost:3000/all")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const render = () => {
    return activeGender === "all"
      ? users
      : users.filter((u) => u.gender === activeGender);
  };

  const addUser = async () => {
    if (!name.trim()) return;

    const newUserData = {
      name,
      gender: selectedGender,
      id: Math.random().toString(16).slice(2, 6)
    };

    const res = await fetch("http://localhost:3000/all", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
    });

    const newUser = await res.json();
    setUsers([...users, newUser]);
    setName("");
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:3000/all/${id}`, {
      method: "DELETE",
    });

    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">User Filter</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />

      <select
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <button onClick={addUser}>Add User</button>

      <div className="btn-group">
        <button
          className={activeGender === "all" ? "btn active" : "btn"}
          onClick={() => setActiveGender("all")}
        >
          All
        </button>

        <button
          className={activeGender === "male" ? "btn active" : "btn"}
          onClick={() => setActiveGender("male")}
        >
          Male
        </button>

        <button
          className={activeGender === "female" ? "btn active" : "btn"}
          onClick={() => setActiveGender("female")}
        >
          Female
        </button>
      </div>

      <User users={render()} onRemove={removeUser} />
    </div>
  );
}
