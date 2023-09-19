import React from "react";
import HomePage from "./pages/HomePage";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="user-details" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
