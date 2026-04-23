import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const ProtectRoute = ({children}) => {
      const userData = JSON.parse(localStorage.getItem("user"));

 if (!userData || Date.now() > userData.expiry) {
  localStorage.removeItem("user");
  // toast.error("Please login first !")
  return <Navigate to="/" />;
}
return children;
};

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData && Date.now() < userData.expiry) {
      setUser(userData);
    } else {
      localStorage.removeItem("user");
    }
  }, []);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<ProtectRoute><DashBoard /> </ProtectRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
