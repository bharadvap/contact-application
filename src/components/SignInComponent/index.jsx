import React, { useState, useEffect } from "react";
import { useIndexedDB } from "react-indexed-db";
import history from "../../history";
const SignInComponent = (props) => {
  // This hook will use to get data based on key value.
  const { getByIndex } = useIndexedDB("user");
  const [user, setUser] = useState({});

  // This method will handle in on changes
  const handleOnChange = (event) => {
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  // This method will handle submit
  const handOnSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(user).length > 0) {
      getByIndex("email", user.email).then(
        (event) => {
          if (event) {
            if (user.password === event.password) {
              console.log("event", event);
              localStorage.setItem("user", JSON.stringify(event));
              history.push("/contact");
            } else {
              setUser({});
            }
          } else {
            setUser({});
          }
        },
        (error) => {
          setUser({});
        }
      );
    }
  };

  return (
    <>
      <h3>Sign In</h3>

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

      <button
        className="btn btn-primary btn-block"
        onClick={(e) => handOnSubmit(e)}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        New user Registration <a href="/signUp">sign Up?</a>
      </p>
    </>
  );
};

export default SignInComponent;
