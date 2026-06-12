function Navbar() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid gray",
      }}
    >
      <h2>Task Manager</h2>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;