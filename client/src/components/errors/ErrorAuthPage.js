import React, { useEffect } from "react";
import { connect } from "react-redux";

import Wrapper from "./Wrapper";
import logout from "../../actions/logout";
import { BASE_URL } from "../../constants/urls";

function ErrorAuthPage(props) {
  const { logout } = props;
  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <Wrapper
      text="You are not authenticated"
      buttonText="Take me to login page"
      buttonUrl={`${BASE_URL}/login`}
    />
  );
}

export default connect(null, { logout })(ErrorAuthPage);
