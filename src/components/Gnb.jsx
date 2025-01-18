import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as GlobeIcon } from "assets/icons/globe.svg";
import { ReactComponent as HeartIcon } from "assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "assets/icons/cart.svg";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import Icon from "atoms/Icon";
import SearchWindow from "./SearchWindow";
import SearchBar from "./SearchBar";
import CenterLayout from "./CenterLayout";
import CategoryBar from "./CategoryBar";

const Gnb = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <Wrapper>
      <CenterLayout>
        <Inner>
          <SearchBar
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            placeholder="Search"
            width="338px"
          />
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
      </CenterLayout>
      {isSearching && (
        <SearchWindow
          isSearching={isSearching}
          setIsSearching={setIsSearching}
        />
      )}
      <CategoryBar />
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  background-color: white;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 0 15px;
  box-sizing: border-box;
  height: 60px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 8px;
  width: 338px;
`;
