
import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/uri-koren-fullstack-developer/"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/uri_koren/"><InstagramIcon /></a>
        <a href="https://www.facebook.com/profile.php?id=100000190022296"><FacebookIcon /></a>
      </div>
      <p> &copy; 2022 uri koren</p>
    </div>
  );
}

export default Footer;