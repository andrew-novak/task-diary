import React from "react";

import Wrapper from "./Wrapper";
import { BASE_URL } from "../../constants/urls";

function ErrorAuthPage(props) {
  return (
    <Wrapper
      text="An error occurred"
      buttonText="Take me to my tasks"
      buttonUrl={`${BASE_URL}/`}
    />
  );
}

export default ErrorAuthPage;
