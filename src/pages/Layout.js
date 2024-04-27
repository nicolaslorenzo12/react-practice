import { Outlet, Link } from "react-router-dom";
import '../style/layout.css';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link className="layout-link" to="/">Supermarkets</Link>
          </li>
          <li>
            <Link className="layout-link" to="/products">Products</Link>
          </li>
          <li>
            <Link className="layout-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;