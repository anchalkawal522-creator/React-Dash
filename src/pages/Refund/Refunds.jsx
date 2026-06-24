import { useEffect } from "react";
import Chart from "chart.js/auto";
import "./refund.css";
export default function Refunds() {
  useEffect(() => {
    const refundchart = new Chart(document.getElementById("refundChart"), {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Refund Amount",
            data: [42000, 51000, 63000, 48000, 70000, 92000],
            borderColor: "#dc3545",
            backgroundColor: "rgba(220,53,69,.1)",
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

    const toggleBtn = document.getElementById("toggleBtn");
    const chartBox = document.getElementById("chartBox");
    const tableBox = document.getElementById("tableBox");

    const handleToggle = () => {
      if (chartBox.style.display === "none") {
        chartBox.style.display = "block";
        tableBox.style.display = "none";
        toggleBtn.innerHTML = "Table View";
      } else {
        chartBox.style.display = "none";
        tableBox.style.display = "block";
        toggleBtn.innerHTML = "Chart View";
      }
    };

    toggleBtn?.addEventListener("click", handleToggle);

    document.querySelectorAll(".dropdown-title").forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelectorAll(".user-dropdown").forEach((menu) => {
          if (menu !== item.nextElementSibling) {
            menu.classnameList.remove("show");
          }
        });

        item.nextElementSibling.classNameList.toggle("show");
      });
    });

    return () => {
      refundchart.destroy();
      toggleBtn?.removeEventListener("click", handleToggle);
    };
  }, []);
  const cards = [
  {
    title: "Total Refunds",
    value: "1,286",
  },
  {
    title: "Successful",
    value: "1,040",

  },
  {
    title: "Pending",
    value: "176",

  },
  {
    title: "Failed",
    value: "70",

  },
];
const refundData = [
  ["Jan", "₹42,000"],
  ["Feb", "₹51,000"],
  ["Mar", "₹63,000"],
  ["Apr", "₹48,000"],
  ["May", "₹70,000"],
  ["Jun", "₹92,000"],
];

const activities = [
  ["Rahul", "Refunded", "bg-success"],
  ["Priya", "Failed", "bg-danger"],
  ["Anchal", "Pending", "bg-warning"],
  ["Rohit", "Refunded", "bg-success"],
  ["Mohit", "Pending", "bg-warning"],
  ["Riya", "Refunded", "bg-success"],
];

return (
  <>
        <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Refund Dashboard</h3>
      </div>
    <div className="row g-4 mb-4">
      {cards.map((card, index) => (
        <div className="col-lg-3 col-md-6" key={index}>
          <div className="card dashboard-card shadow-sm">
            <div className="card-body d-flex justify-content-between">
              <div>
                <h6>{card.title}</h6>
                <h2>{card.value}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="card chart-card shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between mb-3">
          <h5>Refund Analytics</h5>

          <button className="btn btn-outline-primary btn-sm" id="toggleBtn">
            Table View
          </button>
        </div>

        <div id="chartBox">
          <canvas id="refundChart"></canvas>
        </div>

        <div id="tableBox" style={{ display: "none" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Month</th>
                <th>Refund Amount</th>
              </tr>
            </thead>

            <tbody>
              {refundData.map(([month, amount], index) => (
                <tr key={index}>
                  <td>{month}</td>
                  <td>{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div className="card shadow-sm">
      <div className="card-body">
        <h5>Recent Activity</h5>

        <table className="table">
          <tbody>
            {activities.map(([name, status, color], index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>
                  <span className={`badge ${color}`}>
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  </>
);
}
