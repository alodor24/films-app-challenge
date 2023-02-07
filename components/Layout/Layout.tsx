import { useEffect } from "react";
import FooterApp from "../FooterApp";
import NavbarApp from "../NavbarApp";
import * as SC from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const isServer = typeof window === "undefined";
  const WOW = !isServer ? require("wow.js") : null;

  useEffect(() => {
    new WOW().init();
  }, [WOW]);

  return (
    <>
      <NavbarApp />
      <SC.Main>{children}</SC.Main>
      <FooterApp />
    </>
  );
};

export default Layout;
