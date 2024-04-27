import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import { Supermarket } from "./pages/Supermarket";
// import { SupermarketTable } from "./pages/Supermarket";
import Contact from "./pages/Contact";
import ProductsOfSupermarket from "./pages/ProductsOfSupermarket";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Supermarket />} />
          {/* <Route index element={
            <>
              <Supermarket />
              <SupermarketTable />
            </>
          } /> */}
          <Route path="products" element={<Product/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="productsofasupermarket/:supermarketId" element={<ProductsOfSupermarket/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);