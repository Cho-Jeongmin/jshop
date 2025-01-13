import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <T1>MUSINSA</T1>
      <T2>MUSINSA</T2>
      <T3>MUSINSA</T3>
      <T4>MUSINSA</T4>
      <T5>MUSINSA</T5>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  height: 1000px;
`;

const T1 = styled.div`
  font-family: "proximanova";
  font-weight: 100;
  font-size: 30px;
`;

const T2 = styled.div`
  font-family: "proximanova";
  font-weight: 300;
  font-size: 30px;
`;

const T3 = styled.div`
  font-family: "proximanova";
  font-weight: 500;
  font-size: 30px;
`;

const T4 = styled.div`
  font-family: "proximanova";
  font-weight: 700;
  font-size: 30px;
`;

const T5 = styled.div`
  font-family: "proximanova";
  font-weight: 900;
  font-size: 30px;
`;
