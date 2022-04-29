import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, useMediaQuery, Popper } from "@material-ui/core";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useStyles from "./Header.styles";
import UserAvatar from "./UserAvatar";
import { authSelector } from "../../redux/selectors";

const Header = () => {
  const classes = useStyles();
  const { user } = useSelector(authSelector);
  const WIDTH = useMediaQuery("(max-width:700px)");

  return (
    <div className={classes.appBar} position="static" color="inherit">
      <div className={classes.logo}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Cục An toàn Thực Phẩm</p>
        <Link to="/"></Link>
      </div>
      <div className={classes.user_avatar}>
        <UserAvatar userId={user?.id} image={user?.image}></UserAvatar>
      </div>
    </div>
  );
};
export default Header;
