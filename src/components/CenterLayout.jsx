import React from "react";
import styled from "styled-components";

const CenterLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CenterLayout;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
