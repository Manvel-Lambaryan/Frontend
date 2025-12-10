export function User({ users, onRemove }) {
  return (
    <div className="user-list">
      {users.map((u) => (
        <div key={u.id} className="user-card">
          <div className="user-left">
            <span className="user-name">{u.name}</span>
            <span className="user-gender">{u.gender}</span>
          </div>

          <button className="delete-btn" onClick={() => onRemove(u.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
