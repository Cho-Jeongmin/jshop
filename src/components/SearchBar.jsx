import React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const SearchBar = ({ openSearch, placeholder, width }) => {
  const onClick = () => {
    if (openSearch !== undefined) openSearch();
  };

  return (
    <Wrapper onClick={onClick} isSlide={openSearch === undefined} width={width}>
      <div className="icon-wrapper">
        <SearchIcon />
      </div>
      <input
        className="search-input"
        placeholder={placeholder}
        autoFocus={openSearch === undefined}
      />
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  @keyframes extend {
    from {
      width: 338px;
    }
    to {
      width: 100%;
    }
  }

  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  width: ${(props) => props.width};
  ${(props) => props.isSlide && "animation: 0.3s extend;"}
  height: 38px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${(props) => props.theme.gray01};
  overflow: hidden;
  cursor: pointer;

  @keyframes slide-left {
    from {
      transform: translateX(0);
    }

    to {
      transform: translate(-26px, 0);
    }
  }

  div.icon-wrapper {
    ${(props) => props.isSlide && "transform: translateX(-26px);"}
    ${(props) => props.isSlide && "animation: 0.3s slide-left;"}
  }

  input.search-input {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    width: calc(100% - 35px);
    &::placeholder {
      font-family: proximanova;
      font-weight: 100;
      font-size: 16px;
      color: ${(props) => props.theme.gray03};
    }
    &:focus {
      outline: none;
    }

    ${(props) => props.isSlide && "transform: translateX(-26px);"}
    ${(props) => props.isSlide && "animation: 0.3s slide-left;"}
    ${(props) => !props.isSlide && "cursor: pointer;"}
  }
`;
