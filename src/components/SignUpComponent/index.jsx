import React, { useState, useEffect } from "react";
const SignUpComponent = (props) => {
  // We are managing the state for functional component
  const [user, setUser] = useState({});
  const [error, setErrors] = useState({});

  // This is handle all the on change.
  const handleOnChange = (event) => {
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  // This is handle all the on Submit.
  const handleOnSubmit = (event) => {
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
        onClick={(e) => handleOnSubmit(e)}
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
