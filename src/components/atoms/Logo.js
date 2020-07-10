import React from "react";

import styled from "styled-components";

const LogoImg = styled.img`
  width: 75%;
  margin: 50px auto 30px auto;
`;

const Logo = () => {
  return (
    <LogoImg
      src={
        "https://res.cloudinary.com/ab91/image/upload/v1586733215/Payment%20App/logo.png"
      }
    />
  );
};

export default Logo;
