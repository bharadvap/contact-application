import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import history from "../../history";
const SignUpComponent = (props) => {
  // We are managing the state for functional component
  const [user, setUser] = useState({});

  // This hook provide you to add user in database.
  const { add } = useIndexedDB("user");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    add(user).then(
      (event) => {
        history.push("/signIn");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // This is handle all the on change.
  const handleOnChange = (event) => {
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
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
