import "./dashboard.css";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function Dashboard() {
  const revenueRef = useRef(null);
  const userRef = useRef(null);
  const bookingRef = useRef(null);

  useEffect(() => {
    const revenueChart = new Chart(revenueRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "Consultation",
          "Booking",
          "Products",
          "Refunds",
          "Wallet Recharge",
        ],
        datasets: [
          {
            data: [45000, 30000, 15000, 5000, 25000],
            backgroundColor: [
              "#6366F1",
              "#10B981",
              "#F59E0B",
              "#EF4444",
              "#3B82F6",
            ],
            borderWidth: 0,
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

    const userChart = new Chart(userRef.current, {
      type: "line",
      data: {
        labels: ["May 24", "May 25", "May 26", "May 27", "May 28", "May 29", "May 30"],
        datasets: [
          {
            label: "Users",
            data: [200, 320, 450, 600, 780, 900, 1000],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59,130,246,.15)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
    });

    const bookingChart = new Chart(bookingRef.current, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Bookings",
            data: [120, 180, 140, 220, 280, 320],
            backgroundColor: [
              "#8B5CF6",
              "#6366F1",
              "#3B82F6",
              "#06B6D4",
              "#10B981",
              "#F59E0B",
            ],
            borderRadius: 8,
          },
        ],
      },
    });

    return () => {
      revenueChart.destroy();
      userChart.destroy();
      bookingChart.destroy();
    };
  }, []);

  const dashboardCards = [
    {
      icon: "bi bi-people",
      title: "Users",
      value: "1,500",
      stats: [
        ["Active-", "1200"],
        ["Pending-", "100"],
        ["Blocked-", "50"],
        ["New Today-", "30"],
      ],
    },
    {
      icon: "bi bi-wallet2",
      title: "Revenue",
      value: "₹1,000",
      stats: [
        ["Today-", "₹500"],
        ["Weekly-", "₹2500"],
        ["Monthly-", "₹1000"],
        ["Wallet-", "₹1000"],
      ],
    },
    {
      icon: "bi bi-calendar",
      title: "Bookings",
      value: "542",
      stats: [
        ["Confirmed-", "420"],
        ["Pending-", "80"],
        ["Cancelled-", "22"],
        ["Today-", "20"],
      ],
    },
    {
      icon: "bi bi-chat",
      title: "Consultations",
      value: "850",
      stats: [
        ["Completed", "700"],
        ["Ongoing", "50"],
        ["Pending", "80"],
        ["Missed", "20"],
      ],
    },
  ];

  return (
    <div className="main">
      <div className="row g-4 m-1">
        {dashboardCards.map((card, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="stat-card d-flex justify-content-between align-items-start">
              <div className="card-left">
                <i className={card.icon}></i>
                <h6>{card.title}</h6>
                <h2>{card.value}</h2>
              </div>

              <div className="small-stats">
                {card.stats.map(([label, value], i) => (
                  <div key={i}>
                    <span>{label} </span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="row mt-4">
        <div className="col-lg-6">
          <div className="chart-card">
            <h3>Revenue Overview</h3>
            <canvas ref={revenueRef}></canvas>
          </div>
        </div>

        <div className="col-lg-6 mt-3">
          <div className="chart-card">
            <h3>User Growth</h3>
            <canvas ref={userRef}></canvas>
          </div>
        </div>
        <div className="row mt-4">
        <div className="col-lg-12 mt-3">
          <div className="chart-booking">
            <h3>Booking Analytics</h3>
            <canvas ref={bookingRef}></canvas>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
