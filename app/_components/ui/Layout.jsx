import Footer from "./Footer";
import Header from "./Header";
import LoadingWrapper from "./LoadingWrapper";

const Layout = ({ children }) => {
  return (
    <LoadingWrapper>
      <Header />
      {children}
      <Footer />
    </LoadingWrapper>
  );
};

export default Layout;
