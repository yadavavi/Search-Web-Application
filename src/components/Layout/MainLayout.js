import { Fragment } from "react";
import classes from "./MainLayout.module.css";
import Header from "./Header";

const MainLayout = ({onSearchHandler,children, reset, searchInput, setSearchInput}) => {
  return (
    <Fragment>
      <Header onSearchHandle={onSearchHandler} reset={reset} setSearchInput={setSearchInput} searchInput={searchInput} />
      <main className={classes.main}>{children}</main>
    </Fragment>
  );
};

export default MainLayout;
