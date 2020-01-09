import React from "react";

import Logo from "../assets/Logo-rimac.svg";
import "./scss/Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-logo">
      <Link className="logo-rimac" to="/">
        <img src={Logo} alt="Logo Rimac" />
      </Link>
    </div>
  );
}

export default Header;
