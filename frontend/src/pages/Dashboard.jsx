import { useEffect, useState } from "react";
import api from "../api/axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const role =
    localStorage.getItem("role") || "user";

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

  const createTask = async () => {
    if (!title.trim()) return;

    try {
      await api.post("/tasks", {
        title,
      });

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const updateTask = async (id, status) => {
    try {
      await api.put(`/tasks/${id}`, {
        status:
          status === "pending"
            ? "completed"
            : "pending",
      });

      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="dashboard">
      <div className="header">
        <div>
          <h1>Task Manager</h1>
          <p>
            Logged in as:
            <strong> {role.toUpperCase()}</strong>
          </p>
        </div>

        <button onClick={logout}>
          Logout
        </button>
      </div>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <button onClick={createTask}>
          Create Task
        </button>
      </div>

      <h2>My Tasks</h2>

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
              Status:
              <strong>
                {" "}
                {task.status}
              </strong>
            </p>

            <div className="task-actions">
              <button
                onClick={() =>
                  updateTask(
                    task._id,
                    task.status
                  )
                }
              >
                {task.status === "pending"
                  ? "Complete"
                  : "Mark Pending"}
              </button>

              <button
                onClick={() =>
                  deleteTask(task._id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;