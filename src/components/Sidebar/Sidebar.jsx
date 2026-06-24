import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    {
      name: "dashboard",
      path: "/dashboard",
      icon: "bi bi-grid",
      label: "Dashboard",
    },
    {
      name: "astrologer",
      path: "/astrologer",
      icon: "bi bi-people",
      label: "Astrologers Management",
      submenu: [
        {
          name: "pendingastro",
          path: "/pendingastro",
          label: "Pending Astrologers",
        },
        {
          name: "allastro",
          path: "/allastro",
          label: "All Astrologers",
        },
        {
          name: "allbooking",
          path: "/allbooking",
          label: "All Bookings",
        },
      ],
    },
    {
      name: "user",
      path: "/user",
      icon: "bi bi-person",
      label: "User Management",
    },
    {
      name: "review",
      path: "/review",
      icon: "bi bi-box",
      label: "Reviews",
    },
    {
      name: "booking",
      path: "/booking",
      icon: "bi bi-box",
      label: "Booking",
    },
    {
      name: "revenue",
      path: "/revenue",
      icon: "bi bi-cart",
      label: "Revenue",
    },
    {
      name: "refunds",
      path: "/refunds",
      icon: "bi bi-cash",
      label: "Refunds",
    },
    {
      name: "settings",
      icon: "bi bi-gear",
      label: "Settings",
      submenu: [
        {
          name: "service",
          path: "/service",
          label: "Service",
        },
        {
          name: "templates",
          path: "/templates",
          label: "Templates",
        },
        {
          name: "tags",
          path: "/tags",
          label: "Tags",
        },
      ],
    },
    {
      name: "logout",
      path: "/logout",
      icon: "bi bi-box-arrow-right",
      label: "Logout",
    },
  ];

  return (
    <div className="sidebar">
      <Link to="/dashboard" className="sidebar-link">
        <div className="logo">
          <span>🪐</span>
          <h4>
            Astro<span className="orange">GR</span>
          </h4>
        </div>
      </Link>

      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.name} className={active === item.name ? "active" : ""}>
            {item.submenu ? (
              <>
<Link
  to={item.path}
  className="block sidebar-link"
  onClick={() => setActive(item.name)}
>
  <div>
    <i className={item.icon}></i> {item.label}
  </div>
  <i className="bi bi-chevron-down"></i>
</Link>

                <div className="collapse mt-2" id={`${item.name}Menu`}>
                  <ul className="submenu">
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem.name}
                        className={active === subItem.name ? "active" : ""}
                      >
                        <Link
                          to={subItem.path}
                          className="sidebar-link"
                          onClick={() => setActive(subItem.name)}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className="sidebar-link"
                onClick={() => setActive(item.name)}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
