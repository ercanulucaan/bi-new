import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import HeaderSection from "../sections/HeaderSection";
import FooterSection from "../sections/FooterSection";

function MainLayout()
{
    return (
        <Fragment>
            <HeaderSection />
              <Outlet />
            <FooterSection />
        </Fragment>
      );
}

export default MainLayout;