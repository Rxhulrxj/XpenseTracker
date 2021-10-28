import React from "react";
import styled from "styled-components";

const HeaderSide = () => {
  return (
    <HeaderContainer>
      <Header>
        <HeaderLogo>
          <span>X</span><span>p</span><span>e</span><span>n</span><span>s</span><span>e</span>.
          <i className="fi fi-rr-pulse" />
        </HeaderLogo>
        <HeaderButton>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title="Source File"
          >
            <i className="devicon-github-original colored" />
            Source
          </a>
        </HeaderButton>
      </Header>
    </HeaderContainer>
  );
};

export default HeaderSide;
const HeaderContainer = styled.div`
  width: 50%;
  margin: auto;
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 6px 12px;
`;
const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 500;
  cursor: pointer;
  > i {
    display: flex;
    align-items: center;
    margin-left: 6px;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 512px) {
    font-size: 24px;
  }
  span:hover{
    animation: rotate 1s linear;
  }
  @keyframes rotate {
    0%{
                transform: rotate(360deg);
            }
            50%{
                transform: rotate(180deg);
            }
            100%{
                transform: rotate(0deg);
  }
}
`;
const HeaderButton = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0px 8px;
  transition: transform .5s;
  opacity: 0.8;
  > a {
    text-decoration: none;
    color: #000;
    > i {
      margin-right: 8px;
    }
  }
  :hover {
      transform: scale(1.1);
      opacity: 1;
      background-color: #000;
      >a{
        color: white;
      }
      >a >i{
        color: white;
      }
    }
  @media only screen and (max-width: 1024px) {
    font-size: 18px;
  }
  @media only screen and (max-width: 512px) {
    font-size: 16px;
  }
`;
