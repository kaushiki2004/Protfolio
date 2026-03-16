
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import PortfolioDetail from "./pages/PortfolioDetails";
import BlogDetail from "./pages/BlogDetails";
import ScrollToTop from "./components/ScrollToTop";
// import About from "./pages/About";
// import Resume from "./pages/Resume";
//import Portfolio from "./pages/Portfolio";
// import Blog from "./pages/Blog";
// import BlogDetail from "./pages/BlogDetail";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Route>
      </Routes>
    </>
  );
}