import Home from "./components/Home";
import About from "./components/About";
// import Admin from "./components/Admin";
import Center from "./components/Center";
import Questions from "./components/Questions";
import Search from "./components/Search";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/center" element={<Center />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
