import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children, isTopBar, variant }) => {
  return (
    <div>
      <Header isTopBar={isTopBar} variant={variant} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
