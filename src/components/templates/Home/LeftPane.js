import React from "react";

import NavHome from "../../menus/NavHome";
import NavApp from "../../menus/NavApp";

const LeftPane = props => {
  return (
    <div>
      <NavHome auth={props.auth} />
    </div>
  );
};

export default LeftPane;
