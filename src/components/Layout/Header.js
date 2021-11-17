import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";

import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const { Search } = Input;

const Header = (props) => {
  const onSearch = (value) => {
    props.onsearchHandle(value);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/">
          {" "}
          <img
            className={classes["main-image"]}
            src={logo}
            alt="Company logo"
          />{" "}
        </NavLink>
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </header>
    </Fragment>
  );
};

export default Header;
