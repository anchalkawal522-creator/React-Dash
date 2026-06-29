import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Astrologers from "./pages/Astrologers/Astrologers";
import Refunds from "./pages/Refund/Refunds";
import Review from "./pages/Reviews/Reviews";
import Users from "./pages/Users/Users";
import Bookings from "./pages/Booking/Booking";
import Revenue from "./pages/Revenue/Revenue";
import Login from "./Login/Login";
import Logout from "./pages/Logout/Logout"

function App() {

  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <>
                <Sidebar />

                <div className="main-content">
                  <Header />

                  <div className="content-dash">
                    <Routes>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/astrologer" element={<Astrologers />} />
                      <Route path="/refunds" element={<Refunds />} />
                      <Route path="/review" element={<Review />} />
                      <Route path="/user" element={<Users />} />
                      <Route path="/booking" element={<Bookings />} />
                      <Route path="/revenue" element={<Revenue />} />
                       <Route path="/logout" element={<Logout />} />

                    </Routes>
                  </div>
                </div>
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;