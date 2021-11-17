import { Fragment } from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";

const MainLayout = (props) => {
  return (
    <Fragment>
      <Header onsearchHandle={props.onSearchHandler} />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default MainLayout;
