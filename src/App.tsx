import React, { useState } from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes, 
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Login from "./components/login";
import Home from "./components/dashboard";
import PrivateRoute from "./components/privateRoute";

const App: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [token, setToken] = useState<string>("");

  return (
    <><BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login setUser={setUser} setToken={setToken} />} />
        <Route path="/" element={<Outlet />}>
          <Route
            path="/"
            element={<PrivateRoute
              path="/"
              element={<Home user={user} />}
              user={user} />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Route>
      </Routes>
    </BrowserRouter></>
  );
};

export default App;
