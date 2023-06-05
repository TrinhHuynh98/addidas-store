import { Header, Footer } from "../src/components/Layout";
import "./App.css";
import Blogs from "./components/Blogs";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import { ListProduct, ProductDetail } from "./components/UI/products";

function App() {
  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/events" element={<Event />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <footer className="relative bg-white pt-8 pb-6 ">
        <Footer />
      </footer>
    </>
  );
}

export default App;
