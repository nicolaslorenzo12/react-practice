import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Product from "./pages/Product";
import Supermarket from "./pages/Supermarket";
import Contact from "./pages/Contact";
import ProductsOfSupermarket from "./pages/ProductsOfSupermarket";
import AddSuperMarket from "./pages/AddSupermarket";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Supermarket />} />
          <Route path="products" element={<Product/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="productsofasupermarket/:supermarketId" element={<ProductsOfSupermarket/>} />
          <Route path="addsupermarket" element={<AddSuperMarket/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);