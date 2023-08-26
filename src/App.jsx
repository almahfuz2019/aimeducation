import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Sheared/Navbar";
import NavbarForPhone from "./Components/Sheared/NavbarForPhone";
import Footer from "./Components/Sheared/Footer";
import DeshboardHome from "./Components/Deshboard/DeshboardHome";
import Login from "./Components/Authentication/Login";
import UserDataInputForm from "./Components/UserDataInputForm";
import CountryDetails from "./Components/CountryDetails";
import About from "./Components/About";
import Contact from "./Components/Contact";
import BasicInfo from "./Components/Deshboard/Client/Pages/BasicInfo";
import AdminBasicInfo from "./Components/Deshboard/Admin/AdminBasicInfo";
function App() {
  return (
    <div>
      <Navbar />
      <NavbarForPhone />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<UserDataInputForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<CountryDetails />} />
        <Route path="/deshboard" element={<DeshboardHome />}>
          <Route index element={<BasicInfo />} />
          <Route path="admin-basic-info" element={<AdminBasicInfo />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
