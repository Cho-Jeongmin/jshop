import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import CenterLayout from "./CenterLayout";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";
import Icon from "atoms/Icon";

const mockData = [
  {
    title: "Most Searched Brands",
    list: [
      "MUSINSA STANDARD",
      "STAND OIL",
      "MATIN KIM",
      "GLOWNY",
      "thisisneverthat®",
      "MUSINSA STANDARD WOMAN",
      "COVERNAT",
      "KIRSH",
      "YOUHEE",
      "LEMAIN SECOND",
      "MARGESHERWOOD",
    ],
  },
  {
    title: "Popular",
    list: [
      "hoodie",
      "Zip-up",
      "Hoodies",
      "matin kim",
      "bag",
      "sweatpants",
      "T shirt",
      "Skirt",
      "Jeans",
      "shirt",
      "Dres",
    ],
  },
  {
    title: "",
    list: [],
  },
];

const SearchWindow = ({ closeSearch }) => {
  return (
    <Wrapper>
      <CenterLayout>
        <Inner>
          <Top>
            <SearchBar
              placeholder="Search By Brands, Product or Category"
              width="100%"
            />
            <Icon icon={<CloseIcon />} onClick={closeSearch} />
          </Top>
          <Bottom>
            {mockData.map((rank, index) => (
              <Rank isSeparator={index !== 0 && rank.title !== ""}>
                <RankTitle>{rank.title}</RankTitle>
                <RankList>
                  {rank.list.map((item, index) => (
                    <RankRow index={index}>
                      <RankNumber>{index}</RankNumber>
                      {item}
                    </RankRow>
                  ))}
                </RankList>
              </Rank>
            ))}
          </Bottom>
        </Inner>
      </CenterLayout>
    </Wrapper>
  );
};

export default SearchWindow;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  background-color: white;
  width: 100vw;
`;

const Inner = styled.div`
  padding: 11px 15px 56px 15px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-top: 32px;
`;

const Rank = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc((100% - 64px) / 3);
  &::before {
    content: " ";
    display: ${(props) => (props.isSeparator ? "block" : "none")};
    position: absolute;
    left: -40px;
    height: 100%;
    width: 0px;
    border-left: 1px solid rgb(228, 231, 236);
  }
`;

const RankTitle = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`;
const RankList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const RankRow = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  font-weight: 100;
  animation: 0.3s ease calc(${(props) => props.index}*0.07s) fade-in forwards;
  @keyframes fade-in {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
const RankNumber = styled.div`
  font-weight: 300;
  margin-right: 8px;
`;
