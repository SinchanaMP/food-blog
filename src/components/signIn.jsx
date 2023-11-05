import "../styles/login.css";
import login from "../images/login.jpg";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  let navigate = useNavigate();

  let email = useRef();
  let password = useRef();

  let signIn = (e) => {
    e.preventDefault();
    let data = {
      email: email.current.value,
      password: password.current.value,
    };
    axios.post("http://localhost:4000/signin", data).then((res) => {
      alert(res.data.message);
      if (res.data.status == 200) {
        navigate("/home");
      }
    });
  };
  return (
    <div className="login">
      <div className="content">
        <div className="div1">
          <h3>Login</h3>
          <form action="" onSubmit={signIn}>
            <label>Username</label>
            <br />
            <input
              type="email"
              ref={email}
              name="User Name"
              placeholder="your-email@gmail"
            />
            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
            />

            <Link>New User</Link>
            <Link to="./signup">Sign Up</Link>
            <button onClick={signIn}>Log in</button>
          </form>
        </div>
        <div className="div2">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
