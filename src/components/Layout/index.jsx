import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/index.jsx";
import { LayoutStyled } from "./LayoutStyled.js";
import { VscGithubAlt } from "react-icons/vsc";

function Layout() {
  return (
    <LayoutStyled>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>
          Developed by
          <a href="https://github.com/FerrnA">
            <VscGithubAlt /> FerrnA
          </a>
        </span>
      </footer>
    </LayoutStyled>
  );
}

export default Layout;
