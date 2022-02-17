import Nav from "./nav";
import Sidenav from "./sidenav";

const Layout = ({ children, categories, seo }) => (
  <>
    <Nav categories={categories} />
    <Sidenav categories={categories} />
    {children}
  </>
);

export default Layout;