import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as GlobeIcon } from "assets/icons/globe.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import Icon from "atoms/Icon";

const Gnb = () => {
  return (
    <Wrapper>
      <Inner>
        <SearchBar placeholder="Search">
          <SearchIcon />
          <SearchText>Search</SearchText>
        </SearchBar>
        <Link to="/" style={{ display: "flex" }}>
          <Logo fill="black" />
        </Link>
        <Icons>
          <Icon icon={<GlobeIcon />} text="Australia" />
          <Icon icon={<HeartIcon />} url="/wish" />
          <Icon icon={<CartIcon />} url="/cart" number={0} />
          <Icon icon={<UserIcon />} url="/mypage" />
        </Icons>
      </Inner>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div``;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  max-width: 1280px;
  height: 60px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 338px;
  height: 38px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray01};
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 8px;
  width: 338px;
`;

const SearchText = styled.span`
  color: ${(props) => props.theme.gray03};
  font-weight: 100;
`;
