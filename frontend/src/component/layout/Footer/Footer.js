import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Creditos:</h4>
        <p>Guido Lucana Lopez</p>
        
        <br />
        <h4>Otras apps</h4>
        <a href="https://play.google.com/store/apps/details?id=com.reeu.reeu_premium&pli=1"><img src={playStore} alt="playstore" /></a>
        
      </div>

      <div className="midFooter">
        <h1>LOGITECH</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MeAbhiSingh</p>
      </div>

    </footer>
  );
};

export default Footer;
