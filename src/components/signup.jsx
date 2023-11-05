import { useRef } from "react";
import login from "../images/login.jpg";
import "../styles/signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  let name = useRef();
  let password = useRef();
  let email = useRef();
  let confirmPassword = useRef();

  let signUp = (e) => {
    e.preventDefault();
    let data = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value,
    };
    //console.log(data);

    if (
      data.name &&
      data.email &&
      data.password &&
      data.password === data.confirmPassword
    ) {
      axios.post("http://localhost:4000/signup", data).then((res) => {
        //console.log(res);
        alert(res.data.message);
      });
    } else {
      alert("invalid credentials");
      navigate("/");
    }
  };

  return (
    <div className="signup">
      <div className="content">
        <div className="sign1">
          <img src={login} alt="" />

          <Link to="/">I am already a member</Link>
        </div>
        <div className="sign2">
          <h3>Login</h3>
          <form action="" onSubmit={signUp}>
            <label>
              UserName
              <br />
              <input
                type="text"
                ref={name}
                name="name"
                placeholder="your Name"
              />{" "}
              <br />
            </label>
            <label>
              Email
              <br />
              <input
                type="email"
                ref={email}
                name="email id"
                placeholder="your-email@gmail.com"
              />
            </label>
            <label>
              Password
              <br />
              <input
                type="password"
                ref={confirmPassword}
                name="confirmPassword"
                placeholder="Re enter password"
              />
            </label>

            <button id="btn1" onClick={signUp}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
