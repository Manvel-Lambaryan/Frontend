import { useEffect, useState } from "react";
import { User } from "./User";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");            // 🔹 input-ի համար
  const [activeGender, setActiveGender] = useState("all"); // 🔹 filter-ի համար
  const [selectedGender, setSelectedGender] = useState("male"); // user add gender

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

  return (
    <div className="container">
      <h1 className="title">User Filter</h1>

      {/* ADD USER */}
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

      {/* FILTER BUTTONS */}
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

      <User users={render()} />
    </div>
  );
}
