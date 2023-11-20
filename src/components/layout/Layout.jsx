import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "../../styles/Layout/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
