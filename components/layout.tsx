import Footer from './footer';
import Header from './header';

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
