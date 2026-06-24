import "./booking.css";

export default function Bookings() {


  const bookings = [
    {
      user: "Rahul Sharma",
      astrologer: "Neha Verma",
      date: "17 Jun 2026",
      amount: "₹499",
      status: "Completed",
      badge: "bg-success",
    },
    {
      user: "Priya Singh",
      astrologer: "Aman Gupta",
      date: "16 Jun 2026",
      amount: "₹799",
      status: "Pending",
      badge: "bg-warning text-dark",
    },
    {
      user: "Rohit Kumar",
      astrologer: "Karan Mehta",
      date: "15 Jun 2026",
      amount: "₹999",
      status: "Cancelled",
      badge: "bg-danger",
    },
    {
      user: "Anchal Katwal",
      astrologer: "Anubhav Sharma",
      date: "14 Jun 2026",
      amount: "₹599",
      status: "Completed",
      badge: "bg-success",
    },
  ];

  return (
    <div className="container-fluid p-4">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Bookings Dashboard</h2>
      </div>
      {/* Stats Section */}
      <div className="row g-4 mb-4">

        <div className="col-lg-6">
          <div className="card shadow border-0 stat-card">
            <div className="card-body">
              <h5>Today's Revenue</h5>
              <h2 className="text-success">₹32,450</h2>

              <hr />

              <h6>Average Booking Value</h6>
              <h3>₹699</h3>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="card shadow border-0 stat-card">
            <div className="card-body">

              <div className="d-flex justify-content-between mb-2">
                <h5>Completion Rate</h5>
                <span>78%</span>
              </div>

              <div className="progress mb-4">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "78%" }}
                ></div>
              </div>

              <div className="d-flex justify-content-between">
                <div>
                  <h6>Pending</h6>
                  <h3 className="text-warning">280</h3>
                </div>

                <div>
                  <h6>Cancelled</h6>
                  <h3 className="text-danger">150</h3>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Table */}
      <div className="card shadow border-0">
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>Recent Bookings</h4>

            <input
              type="text"
              className="form-control w-25"
              placeholder="Search..."
            />
          </div>

          <div className="table-responsive">
            <table className="table align-middle table-hover">

              <thead className="table-light">
                <tr>
                  <th>User</th>
                  <th>Astrologer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={`https://i.pravatar.cc/40?img=${index + 1}`}
                          alt=""
                          className="rounded-circle"
                        />

                        {booking.user}
                      </div>
                    </td>

                    <td>{booking.astrologer}</td>

                    <td>{booking.date}</td>

                    <td>{booking.amount}</td>

                    <td>
                      <span className={`badge ${booking.badge}`}>
                        {booking.status}
                      </span>
                    </td>

                    <td>
                      <button className="btn btn-outline-primary btn-sm me-2">
                        View
                      </button>

                      <button className="btn btn-outline-danger btn-sm">
                        Cancel
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