// src/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#080E1E] min-h-screen text-[#dde2f9]">
      <Outlet />
    </div>
  );
}