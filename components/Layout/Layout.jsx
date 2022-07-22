import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Fragment>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </Fragment>
    </div>
  );
};

export default Layout;
