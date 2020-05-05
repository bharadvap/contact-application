import React, { useEffect, useState } from "react";
import SignUpComponent from "../../components/SignUpComponent";
import { useIndexedDB } from "react-indexed-db";
import history from "../../history";
const SignUp = (props) => {
  const { add } = useIndexedDB("user");
  const onSignUpCall = (user) => {
    console.log(user);
    add(user).then(
      (event) => {
        history.push("/signIn");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return <SignUpComponent onSignUpCall={onSignUpCall} />;
};

export default SignUp;
