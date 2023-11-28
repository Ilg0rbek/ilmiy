import React from "react";
import Header from "../components/header";
import Footer from "../components/pages/footer/footer";

const Layout = ({ hideFooter, hideHeader, children }) => {
  return (
    <div className="warpper">
      {hideHeader && <Header />}
      <div className="main_contentt">{children}</div>
      {hideFooter && <Footer />}
    </div>
  );
};

Layout.defaultProps = {
  hideFooter: true,
  hideHeader: true,
};

export default Layout;
