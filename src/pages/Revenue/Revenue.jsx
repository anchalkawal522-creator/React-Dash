
function Revenue() {
  const revenueStats = [
    { title: "Total Revenue", value: "₹5.4L" },
    { title: "Today's Revenue", value: "₹12.5K" },
    { title: "Monthly Revenue", value: "₹1.5L" },
    { title: "Pending Payments", value: "₹20K" },
  ];

  const services = [
    { name: "Consultation", amount: "₹2.8L" },
    { name: "Products", amount: "₹1.5L" },
    { name: "Wallet Recharge", amount: "₹1.1L" },
  ];

  const activities = [
    "Rahul Sharma paid ₹499",
    "Priya Singh ordered a product",
    "Wallet recharge ₹1000 successful",
    "New consultation booked",
  ];

  const transactions = [
    {
      customer: "Rahul Sharma",
      amount: "₹499",
      type: "Consultation",
      status: "Paid",
      badge: "success",
    },
    {
      customer: "Priya Singh",
      amount: "₹899",
      type: "Product",
      status: "Pending",
      badge: "warning",
    },
    {
      customer: "Rohit Kumar",
      amount: "₹299",
      type: "Wallet",
      status: "Paid",
      badge: "success",
    },
    {
      customer: "Neha Verma",
      amount: "₹999",
      type: "Consultation",
      status: "Failed",
      badge: "danger",
    },
  ];

  return (
    <div className="container-fluid py-4">
      <h2 className="fw-bold mb-4">Revenue Dashboard</h2>

      {/* Revenue Summary */}
      <div className="card shadow-sm border-0 rounded-4 mb-4">
        <div className="card-body">
          <h5 className="mb-3">Revenue Summary</h5>

          {revenueStats.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between py-3 border-bottom"
            >
              <span>{item.title}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="row g-4">
        {/* Top Services */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-body">
              <h5 className="mb-3">Top Services</h5>

              {services.map((service, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between py-3 border-bottom"
                >
                  <span>{service.name}</span>
                  <strong>{service.amount}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="col-lg-6">
          <div className="card shadow-sm border-0 rounded-4 h-100">
            <div className="card-body">
              <h5 className="mb-3">Recent Activity</h5>

              {activities.map((activity, index) => (
                <div key={index} className="py-3 border-bottom">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="card shadow-sm border-0 rounded-4 mt-4">
        <div className="card-body">
          <h5 className="mb-3">Recent Transactions</h5>

          <div className="table-responsive">
            <table className="table align-middle table-hover">
              <thead className="table-light">
                <tr>
                  <th>Customer</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index}>
                    <td>{item.customer}</td>
                    <td>{item.amount}</td>
                    <td>{item.type}</td>
                    <td>
                      <span className={`badge bg-${item.badge}`}>
                        {item.status}
                      </span>
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

export default Revenue;