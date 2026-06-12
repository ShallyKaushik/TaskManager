import { useEffect, useState } from "react";
import api from "../api/axios";

function AdminDashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data.tasks || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>
            Logged in as:
            <strong> ADMIN</strong>
          </p>
        </div>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task._id}
            className="task-card"
          >
            <h3>{task.title}</h3>

            <p>
              Status: {task.status}
            </p>

            <p>
              Owner:
              {" "}
              {task.createdBy?.name ||
                "Unknown"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;