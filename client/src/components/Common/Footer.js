import React from "react";

const Footer = ({ Typography, classes }) => {
  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Performance Management
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="secondary"
          gutterBottom
        >
          2021 All Rights Reserved
        </Typography>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
