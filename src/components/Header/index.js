import React from "react";

// React router
import { Link } from "react-router-dom";

// Styles
import "./index.css";

function Header() {
  const loompaLogo = `https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png`;

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={loompaLogo} alt="Logo" />
      </Link>
      <header>Oompa Loompa's crew</header>
    </div>
  );
}

export default Header;
