import { Fragment } from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";

const MainLayout = ({onSearchHandler,children, reset}) => {
  return (
    <Fragment>
      <Header onSearchHandle={onSearchHandler} reset={reset} />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default MainLayout;
