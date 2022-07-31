import React, { useRef } from "react";
import { HeaderStyled, NavLinkStyled } from "./HeaderStyled";
import { MdOutlineExpandMore } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api_url = process.env.REACT_APP_BACKEND;

function Header() {
  const refMoreMenu = useRef();
  const navigate = useNavigate();
  const handleClickmoreIcon = () => {
    refMoreMenu.current.style.display === "none"
      ? (refMoreMenu.current.style.display = "block")
      : (refMoreMenu.current.style.display = "none");
  };

  const handleUserLogout = () => {
    axios({
      method: "get",
      withCredentials: true,
      url: `${api_url}/user/logout`,
    })
      .then((res) => navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <HeaderStyled>
      <div className="user">
        <img src="https://avatars.githubusercontent.com/u/86984902?s=40&v=4" alt="" />
      </div>
      <div className="moreIcon" onClick={handleClickmoreIcon}>
        <span>
          <b>fer</b>
        </span>
        <MdOutlineExpandMore />
        <div className="moreMenu" ref={refMoreMenu}>
          <div>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </div>
          <div>
            <NavLinkStyled to="/operations">Transacciones</NavLinkStyled>
          </div>
          <div onClick={handleUserLogout}>Logout</div>
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;
