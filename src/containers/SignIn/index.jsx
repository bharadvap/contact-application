import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SignInComponent from "../../components/SignInComponent";
import * as signInAction from "./actions";
import { useIndexedDB } from "react-indexed-db";
import history from "../../history";
const SignIn = (props) => {
  return <SignInComponent />;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    signInAction: bindActionCreators(signInAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
