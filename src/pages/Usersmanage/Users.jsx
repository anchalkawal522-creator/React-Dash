import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import {
  FaEye,
  FaEdit,
  FaBan,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function Users() {
  const growthChartRef = useRef(null);
  const genderChartRef = useRef(null);

  useEffect(() => {
    const growthChart = new Chart(growthChartRef.current, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Users",
            data: [120, 240, 390, 580, 720, 950],
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79,70,229,.15)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    const genderChart = new Chart(genderChartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Male", "Female", "Others"],
        datasets: [
          {
            data: [55, 40, 5],
            backgroundColor: ["#4f46e5", "#ec4899", "#f59e0b"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => {
      growthChart.destroy();
      genderChart.destroy();
    };
  }, []);

  const users = [
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      date: "17 Jun 2026",
      status: "Active",
      badge: "success",
    },
    {
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9876543211",
      date: "16 Jun 2026",
      status: "Blocked",
      badge: "danger",
    },
    {
      name: "Aman Gupta",
      email: "aman@gmail.com",
      phone: "9876543212",
      date: "15 Jun 2026",
      status: "Pending",
      badge: "warning",
    },
    {
      name: "Neha Kapoor",
      email: "neha@gmail.com",
      phone: "9876543213",
      date: "14 Jun 2026",
      status: "Active",
      badge: "success",
    },
  ];

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <h2 className="fw-bold">Users Dashboard</h2>

        <div className="input-group" style={{ maxWidth: "300px" }}>
          <span className="input-group-text">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search users..."
          />
        </div>
      </div>

      {/* Charts */}
      <div className="row g-4 mb-4">
        <div className="col-lg-12">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h5 className="mb-4">User Growth</h5>
              <canvas ref={growthChartRef}></canvas>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* User Table */}
        <div className="col-lg-8">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
                <h5>User List</h5>

                <div>
                  <button className="btn btn-outline-primary btn-sm me-2">
                    All
                  </button>

                  <button className="btn btn-outline-success btn-sm me-2">
                    Active
                  </button>

                  <button className="btn btn-outline-danger btn-sm">
                    Blocked
                  </button>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>User</th>
                      <th>Phone</th>
                      <th>Joined</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <FaUserCircle size={40} color="#6366f1" />

                            <div>
                              <h6 className="mb-0">{user.name}</h6>
                              <small className="text-muted">
                                {user.email}
                              </small>
                            </div>
                          </div>
                        </td>

                        <td>{user.phone}</td>

                        <td>{user.date}</td>

                        <td>
                          <span
                            className={`badge rounded-pill bg-${user.badge}`}
                          >
                            {user.status}
                          </span>
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-outline-primary">
                              <FaEye />
                            </button>

                            <button className="btn btn-sm btn-outline-warning">
                              <FaEdit />
                            </button>

                            <button className="btn btn-sm btn-outline-danger">
                              <FaBan />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-lg-4">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body">
              <h5 className="mb-4">Recent Activity</h5>

              <div className="border-bottom pb-3 mb-3">
                <h6 className="mb-1">Rahul Sharma</h6>
                <small className="text-muted">Joined 2 hours ago</small>
              </div>

              <div className="border-bottom pb-3 mb-3">
                <h6 className="mb-1">Priya Verma</h6>
                <small className="text-muted">Account blocked</small>
              </div>

              <div className="border-bottom pb-3 mb-3">
                <h6 className="mb-1">Aman Gupta</h6>
                <small className="text-muted">Pending verification</small>
              </div>

              <div>
                <h6 className="mb-1">Neha Kapoor</h6>
                <small className="text-muted">Updated profile</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}