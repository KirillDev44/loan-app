import React from "react";
import { Button } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import "./Header.scss";

export const Header = React.memo(() => {
  return (
    <div className="header">
      <p className="header--name">LoanAid.Al</p>
      <div className="header--buttons">
        <Button variant="outlined" color="primary" size="medium">
          LOGIN
        </Button>
        <LanguageIcon color={"disabled"} fontSize="large" />
        <p className="language">EN</p>
      </div>
    </div>
  );
});
