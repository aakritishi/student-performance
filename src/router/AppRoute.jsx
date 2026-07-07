import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/auth/Login";

import Home from "../pages/admin/Home";
import AddStudent from "../pages/admin/AddStudent";
import Analytics from "../pages/admin/Analytics";
import Reports from "../pages/admin/Reports";

import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import EditDeleteStudent from "../pages/admin/EditDeleteStudent";
import Prediction from "../pages/admin/Prediction";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="addstudent" element={<AddStudent />} />

            <Route path="editdeletestudent" element={<EditDeleteStudent />} />

            <Route path="results" element={<Reports />} />

            <Route path="analytics" element={<Analytics />} />

            <Route path="prediction" element={<Prediction />} />
          </Route>
        </Route>

        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
