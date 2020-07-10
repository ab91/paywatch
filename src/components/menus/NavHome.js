import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import ReactTooltip from "react-tooltip";

import Logo from "../atoms/Logo";
import NavItem from "../atoms/NavItem";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121432;
  width: 215px;
  height: 100vh;
`;

const NavHome = props => {
  return (
    <Flexbox>
      <Logo />
      <Link to="/app" style={{ textDecoration: "none" }}>
        <a
          href="https://github.com/ab-kokiri/paywatch/blob/master/src/auth/auth.js"
          target="_blank"
          data-tip
          data-for="login"
          data-cy="dog"
        >
          <NavItem active={true} label="Login" />
        </a>
        <ReactTooltip id="login" place="bottom" effect="solid" type="light">
          0Auth sign in pending.
        </ReactTooltip>
      </Link>
      {/*<button onClick={props.auth.login}>Dog</button>*/}
    </Flexbox>
  );
};

export default NavHome;
