import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { FaStar, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function Review() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["5★", "4★", "3★", "2★", "1★"],
        datasets: [
          {
            data: [65, 20, 10, 3, 2],
            backgroundColor: [
              "#22c55e",
              "#3b82f6",
              "#facc15",
              "#fb923c",
              "#ef4444",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });

    return () => chart.destroy();
  }, []);

  const reviews = [
    {
      user: "Rahul Sharma",
      service: "Tarot Reading",
      rating: "⭐⭐⭐⭐⭐",
      review: "Excellent guidance and support.",
      status: "Approved",
      badge: "success",
    },
    {
      user: "Priya Verma",
      service: "Vedic Astrology",
      rating: "⭐⭐⭐⭐",
      review: "Very helpful session.",
      status: "Pending",
      badge: "warning",
    },
    {
      user: "Aman Gupta",
      service: "Numerology",
      rating: "⭐⭐⭐⭐⭐",
      review: "Highly recommended.",
      status: "Approved",
      badge: "success",
    },
    {
      user: "Neha Kapoor",
      service: "Palm Reading",
      rating: "⭐⭐⭐",
      review: "Average experience.",
      status: "Hidden",
      badge: "danger",
    },
  ];

  const latestReviews = [
    "Rahul Sharma gave 5★ rating",
    "Priya Verma reviewed Vedic Astrology",
    "Aman Gupta left positive feedback",
    "Neha Kapoor rated 3★",
  ];

  return (
    <div className="container-fluid py-4">
      <h3 className="fw-bold mb-4">Review Dashboard</h3>

      <div className="row g-4 mb-4">
        {/* Chart */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body text-center">
              <h5 className="mb-4">Ratings</h5>

              <div
                style={{
                  width: "250px",
                  margin: "auto",
                }}
              >
                <canvas ref={chartRef}></canvas>
              </div>

              <h2 className="mt-4 text-warning">
                <FaStar /> 4.8
              </h2>

              <p className="text-muted">Based on 2,540 reviews</p>
            </div>
          </div>
        </div>

        {/* Review Stats */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body">
              <h5 className="mb-4">Overview</h5>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="border rounded-4 p-3">
                    <h6>Total Reviews</h6>
                    <h3>2,540</h3>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded-4 p-3">
                    <h6>Positive Reviews</h6>
                    <h3 className="text-success">
                      <FaCheckCircle /> 2,180
                    </h3>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded-4 p-3">
                    <h6>Negative Reviews</h6>
                    <h3 className="text-danger">
                      <FaTimesCircle /> 360
                    </h3>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="border rounded-4 p-3">
                    <h6>Average Rating</h6>
                    <h3>⭐ 4.8</h3>
                  </div>
                </div>
              </div>

              <hr />

              <h6 className="mb-3">Latest Activity</h6>

              {latestReviews.map((item, index) => (
                <div key={index} className="py-2 border-bottom">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Table */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body">
          <h5 className="mb-3">Recent Reviews</h5>

          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Service</th>
                  <th>Rating</th>
                  <th>Review</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {reviews.map((item, index) => (
                  <tr key={index}>
                    <td>{item.user}</td>
                    <td>{item.service}</td>
                    <td>{item.rating}</td>
                    <td>{item.review}</td>
                    <td>
                      <span className={`badge bg-${item.badge}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        View
                      </button>

                      <button className="btn btn-sm btn-outline-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}