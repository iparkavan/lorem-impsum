import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_list_container}>
        <ul className={classes.footer_pages}>
          <li>
            <a className={classes.anhor} href="Home">Home</a>
          </li>
          <li>
            <a href="Page 1">Page 1</a>
          </li>
          <li>
            <a href="Page 2">Page 2</a>
          </li>
        </ul>
      </div>
      <div className={classes.divider} />
      <div className={classes.social_media}>
        <img src="images/facebook.png" alt="#facebook" />
        <img src="images/twitter.png" alt="#facebook" />
        <img src="images/instagram.png" alt="#facebook" />
        <img src="images/tiktok.png" alt="#facebook" />
      </div>
      <div>
        <p className={classes.Inc}>© Logo, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
