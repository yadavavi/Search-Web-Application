import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";

import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const { Search } = Input;

const Header = ({onSearchHandle, reset}) => {
 
  const onSearch = (value) => {
    onSearchHandle(value);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/">
          {" "}
          <img
            className={classes["main-image"]}
            src={logo}
            onClick={reset}
            alt="Company logo"
          />{" "}
        </NavLink>
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          allowClear
          style={{ width: 300 }}
        />
      </header>
    </Fragment>
  );
};

export default Header;
