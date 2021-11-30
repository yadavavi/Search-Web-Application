import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import logo from "../../assets/logo.png";
import classes from "./Header.module.css";

const Header = ({ onSearchHandle, reset, searchInput, setSearchInput }) => {
  const onchangeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const onSearch = () => {
    onSearchHandle(searchInput);
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
        <Input
          placeholder="input search text"
          onChange={onchangeHandler}
          value={searchInput}
          allowClear
          style={{ width: 300 }}
        />
        <span className={classes.search} onClick={onSearch}>
          <SearchOutlined className={classes.searchIcon} />
        </span>
      </header>
    </Fragment>
  );
};

export default Header;
