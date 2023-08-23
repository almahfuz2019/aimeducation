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
function App() {
  return (
    <>
      <Navbar />
      <NavbarForPhone />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<UserDataInputForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<CountryDetails />} />
        <Route path="/deshboard" element={<DeshboardHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
