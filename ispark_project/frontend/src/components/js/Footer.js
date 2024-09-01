import React from "react";
import "../css/Footer.css";
import logo from "../../png/ibb-logo-tr.png";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <img src={logo} alt="İBB Logo" />
        <br />© 2020 İBB Bilgi İşlem Dairesi Başkanlığı tarafından ❤️ ile tasarlanmıştır.
      </div>
    </div>
  );
};

export default Footer;