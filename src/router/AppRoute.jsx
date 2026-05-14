import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";

import Home from "../pages/admin/Home";
import AddStudent from "../pages/admin/AddStudent";
import EditStudent from "../pages/admin/EditStudent";
import DeleteStudent from "../pages/admin/DeleteStudent";
import Analytics from "../pages/admin/Analytics";
import Reports from "../pages/admin/Reports";

import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="addstudent" element={<AddStudent />} />

            <Route path="editstudent/:id" element={<EditStudent />} />

            <Route path="deletestudent/:id" element={<DeleteStudent />} />

            <Route path="results" element={<Reports />} />

            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Route>

        <Route path="*" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
