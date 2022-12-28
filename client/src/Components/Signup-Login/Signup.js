import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [signupDetails, setSignupDetails] = useState({});
  const [dataSent, setDataSent] = useState(false);
  let navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.cpassword.value;

    if (password === confirmPassword) {
      console.log("matching");
      setSignupDetails({
        username: e.target.elements.username.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
        cpassword: e.target.elements.cpassword.value,
      });
      setDataSent(true);
    } else {
      window.alert("Passwords are not matching");
    }
  };

  useEffect(() => {
    const userSignup = () => {
      axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: signupDetails,
      })
        .then((response) => {
          window.alert("User created successfully!");
          navigate("/");
        })
        .catch((err) => {
          window.alert("User already exists!");
        });
    };
    if (dataSent) {
      userSignup();
      setDataSent(false);
    }
  }, [signupDetails, dataSent, navigate]);
  return (
    <>
      <div className="S-container">
        <div className="S-formDiv">
          <h1>Sign Up</h1>
          <p>Create New Account</p>
          <form action="/signup" method="POST" onSubmit={handleSignup}>
            <input
              id="S-username"
              type="text"
              required={true}
              name="username"
              placeholder="ENTER YOUR NAME"
            />
            <input
              id="S-userid"
              type="email"
              required={true}
              name="email"
              placeholder="MAIL ID"
            />
            <input
              id="S-password"
              name="password"
              required={true}
              type="password"
              min={8}
              placeholder="PASSWORD"
            />
            <input
              id="S-cpassword"
              name="cpassword"
              required={true}
              type="password"
              min={8}
              placeholder="CONFIRM PASSWORD"
            />
            <button type="submit" id="S-signin">
              Sign up
            </button>
          </form>
        </div>

        <h2 id="S-afterForm">
        Already having account?{" "}
          <Link className="S-signup" to="/">
            Log In
          </Link>
        </h2>
      </div>
    </>
  );
}
