export const User = ({ users }) => {
  return (
    <div className="user-wrapper">
      {users.map((u) => (
        <div key={u.id} className="user-card">
          <div className="user-name">{u.name}</div>
          <div className="user-gender">{u.gender}</div>
        </div>
      ))}
    </div>
  );
};
