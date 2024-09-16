// src/App.js

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Sheared/Navbar";
import NavbarForPhone from "./Components/Sheared/NavbarForPhone";
import Footer from "./Components/Sheared/Footer";
import DeshboardHome from "./Components/Deshboard/Pages/DeshboardHome";
import Login from "./Components/Authentication/Login";
import UserDataInputForm from "./Components/UserDataInputForm";
import CountryDetails from "./Components/CountryDetails";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BasicInfo from "./Components/Deshboard/Pages/BasicInfo";

import ForgetPassword from "./Components/Authentication/ForgetPassword";
import RequireAuth from "./Components/Authentication/RequireAuth";
import { ToastContainer } from "react-toastify";
import BasicContact from "./Components/Deshboard/Pages/BasicContact";
import UsersInfo from "./Components/Deshboard/Pages/UsersInfo";

import AreaForm from "./Components/Deshboard/Components/Area/AreaForm";
import AreaInfo from "./Components/Deshboard/Pages/AreaInfo";
import PaymentHistory from "./Components/Deshboard/Pages/PaymentHistory";

import PaymentPage from "./Components/Sheared/Payment";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarForPhone />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<PaymentPage />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<CountryDetails />} />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <DeshboardHome />
            </RequireAuth>
          }
        >
          <Route
            index
            element={
              <RequireAuth>
                <BasicInfo />
              </RequireAuth>
            }
          />
          <Route
            path="users"
            element={
              <RequireAuth>
                <UsersInfo />
              </RequireAuth>
            }
          />
          <Route
            path="contact-info"
            element={
              <RequireAuth>
                <BasicContact />
              </RequireAuth>
            }
          />
          <Route
            path="add-area"
            element={
              <RequireAuth>
                <AreaForm />
              </RequireAuth>
            }
          />
          <Route
            path="area-info"
            element={
              <RequireAuth>
                <AreaInfo />
              </RequireAuth>
            }
          />
          <Route
            path="payment-history"
            element={
              <RequireAuth>
                <PaymentHistory />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
