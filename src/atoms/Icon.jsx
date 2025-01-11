import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Icon = ({ icon, url, number, text }) => {
  const navigate = useNavigate();

  return (
    <Wrapper
      onClick={() => {
        url && navigate(url);
      }}
    >
      {icon}
      {number !== undefined && (
        <Number>
          <div>{number}</div>
        </Number>
      )}
      {text !== undefined && <Text>{text}</Text>}
    </Wrapper>
  );
};

export default Icon;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Number = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  position: absolute;
  right: 0px;
  bottom: 2px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: black;
  color: white;
`;

const Text = styled.div`
  font-size: 14px;
`;
