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

const Gnb = () => {
  const [isSearching, setIsSearching] = useState(false);
  const openSearch = () => setIsSearching(true);
  const closeSearch = () => setIsSearching(false);

  return (
    <Wrapper>
      <CenterLayout>
        <Inner>
          <SearchBar
            openSearch={openSearch}
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
      {isSearching && <SearchWindow closeSearch={closeSearch} />}
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
