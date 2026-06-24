import  { useState } from "react";
import "./astrologers.css";

export default function Astrologers() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      astrologer: "Ravi Sharma",
      user: "Rahul",
      type: "Chat",
      date: "18 Jun 2026",
      time: "10:30 AM",
      duration: "25 min",
      status: "Completed",
      earnings: "₹125",
    },
    {
      id: 2,
      astrologer: "Priya Joshi",
      user: "Amit",
      type: "Call",
      date: "18 Jun 2026",
      time: "11:15 AM",
      duration: "15 min",
      status: "Pending",
      earnings: "₹75",
    },
    {
      id: 3,
      astrologer: "Sunil Kumar",
      user: "Neha",
      type: "Chat",
      date: "18 Jun 2026",
      time: "12:00 PM",
      duration: "10 min",
      status: "Rejected",
      earnings: "₹0",
    },
    {
      id: 4,
      astrologer: "Pooja Singh",
      user: "Anjali",
      type: "Call",
      date: "18 Jun 2026",
      time: "2:15 PM",
      duration: "30 min",
      status: "Blocked",
      earnings: "₹0",
    },
     {
      id: 5,
      astrologer: "Ravi Sharma",
      user: "Rahul",
      type: "Chat",
      date: "18 Jun 2026",
      time: "10:30 AM",
      duration: "25 min",
      status: "Completed",
      earnings: "₹125",
    },
        {
      id: 6,
      astrologer: "Sunil Kumar",
      user: "Neha",
      type: "Chat",
      date: "18 Jun 2026",
      time: "12:00 PM",
      duration: "10 min",
      status: "Rejected",
      earnings: "₹0",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      (filter === "All" || item.status === filter) &&
      item.astrologer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="astrologers-page">

      {/* Cards */}
      <div className="cards">
        <div className="card">
          <h3>Total Astrologers</h3>
          <h1>120</h1>
        </div>

        <div className="card">
          <h3>Online</h3>
          <h1>45</h1>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <h1>12</h1>
        </div>

        <div className="card">
          <h3>Blocked</h3>
          <h1>5</h1>
        </div>

        <div className="card">
          <h3>Rejected</h3>
          <h1>8</h1>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search Astrologer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Rejected</option>
          <option>Blocked</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Astrologer</th>
              <th>User</th>
              <th>Chat/Call</th>
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
              <th>Earnings</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.astrologer}</td>
                <td>{item.user}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.duration}</td>
                <td>{item.earnings}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="block-btn">Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}