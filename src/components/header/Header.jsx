import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";
const Header = () => {
  return (
    <header className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Mirza Sumaiya Alam</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA />
      <HeaderSocial />
      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="contract" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
