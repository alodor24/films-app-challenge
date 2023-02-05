import FooterApp from "../FooterApp";
import NavbarApp from "../NavbarApp";
import * as SC from "./Layout.styles";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavbarApp />
      <SC.Main>{children}</SC.Main>
      <FooterApp />
    </>
  );
};

export default Layout;
