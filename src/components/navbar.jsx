import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav1">
        <h1>Stories</h1>
      </div>
      <div className="nav2">
        <Link to="/">Home</Link>-
        <Link to="/food">Food</Link>
        <Link to="/addfood">Add Food</Link>
      </div>
    </div>
  );
}
export default Navbar;
