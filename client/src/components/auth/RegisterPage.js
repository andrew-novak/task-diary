import React, { useEffect } from "react";
import { connect } from "react-redux";

import AuthProvider from "./AuthProvider";
import logout from "../../actions/logout";
import { register } from "../../actions/auth";

function RegisterPage(props) {
  const { email, password, confirmPassword, logout, register } = props;

  useEffect(() => {
    logout();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    register(email, password, confirmPassword);
  }

  const baseUrl = process.env.PUBLIC_URL;

  return (
    <AuthProvider
      registration
      title="Registration"
      submitText="Create account"
      onSubmit={handleSubmit}
      link2={{ text: "Log in instead", href: `${baseUrl}/login` }}
    />
  );
}

function mapState(state) {
  const { email, password, confirmPassword } = state.auth;
  return { email, password, confirmPassword };
}

export default connect(mapState, { logout, register })(RegisterPage);
