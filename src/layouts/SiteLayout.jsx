import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../assets/sections/Header";
import Footer from "../assets/sections/home/Footer";

const SiteLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteLayout;
