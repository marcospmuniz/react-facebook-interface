import React from "react";
import "./Header.css";

import facebook1 from "../assets/images/facebook-1.png";

function Header() {
  return (
    <header>
      <nav>
        <img src={facebook1} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
