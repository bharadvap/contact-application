import React, { useState, useEffect } from "react";
const SignUpComponent = (props) => {
  const [user, setUser] = useState({});
  const [error, setErrors] = useState({});
  const handleOnChange = (event) => {
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const handOnSubmit = (event) => {
    event.preventDefault();
    props.onSignUpCall(user);
  };

  return (
    <>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={user.email}
          className="form-control"
          onChange={(e) => handleOnChange(e)}
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => handleOnChange(e)}
          value={user.password}
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <label>Confirmation Password</label>
        <input
          name="confirmationPassword"
          type="password"
          value={user.confirmationPassword}
          className="form-control"
          onChange={(e) => handleOnChange(e)}
          placeholder="Enter confirmation password"
        />
      </div>

      <button
        className="btn btn-primary btn-block"
        onClick={(e) => handOnSubmit(e)}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="/signIn">sign in?</a>
      </p>
    </>
  );
};

export default SignUpComponent;
