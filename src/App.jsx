import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/signup";
import Home from "./components/home";
import AddFood from "./components/addfood";
import Food from "./components/food";
import SignIn from './components/signIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<Signup />} path="/Signup" />
        <Route element={<Home />} path="/home" />
        <Route element={<Food />} path="/food" />
        <Route element={<AddFood />} path="/addfood" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
