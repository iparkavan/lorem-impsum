import React from "react";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo_container}>
      <div className={classes.logo}>
        <div className={classes.left} />
        <div className={classes.bottom} />
        <div className={classes.top} />
        <div className={classes.right} />
      </div>
    </div>
  );
};

export default Logo;
