import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderStyled = styled.div`
  height: 60px;
  width: 20vw;
  padding: 0 4.5rem 0 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 6px 1px #0001;
  background-color: #fff;
  .user {
    display: flex;
    align-items: center;
    img {
      width: 35px;
      height: 35px;
      margin-right: 1rem;
      clip-path: circle();
    }
  }
  .moreIcon {
    border: 1px solid transparent;
    transition: border-bottom 0.1s;
    padding-left: 0.2rem;
    position: relative;
    span {
      margin-right: 0.4rem;
    }
    height: 1.2rem;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      border-bottom: 1px solid #0001;
    }
  }
  .moreMenu {
    display: none;
    min-width: 150px;
    position: absolute;
    top: 40px;
    right: 0;
    text-align: right;
    box-shadow: 0 1px 6px 1px #0001;
    background-color: #fff;
    div {
      font-size: 1.2rem;
      padding: 0.5rem;
      border-bottom: 1px solid #0001;
      &:hover {
        background-color: #f9f9f9;
      }
    }
    div:nth-child(3) {
      margin-bottom: 0;
      color: #00000080;
      font-size: 1rem;
      &:hover {
        color: #000;
      }
    }
  }
  @media screen and (max-width: 992px) {
    width: 30vw;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;
