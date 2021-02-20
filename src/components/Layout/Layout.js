import React from "react";
import Aux from "../../hoc/Aux";
import "../../css/Layout.css";

const Layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className="Lcontent">{props.children}</main>
    </Aux>
  );
};

export default Layout;
