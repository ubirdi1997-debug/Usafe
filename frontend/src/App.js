import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "./components/ui/sonner";
import { AdminProvider } from "./context/AdminContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import LegalServices from "./pages/LegalServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <AdminProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/legal-services" element={<LegalServices />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
            <Toaster position="top-right" />
          </BrowserRouter>
        </AdminProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
