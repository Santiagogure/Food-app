import Footer from "./Footer";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
