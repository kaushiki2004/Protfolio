
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Hero from "./sections/Hero";
import PortfolioDetail from "./pages/PortfolioDetails";
// import ScrollToTop from "./components/ScrollToTop";
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
      <Routes>
        {/* <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/portfolio" element={<Portfolio />} />
          

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} /> */}

        <Route element={<Layout />}>
            <Route path="/" element={<Hero />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        </Route>
      </Routes>
    </>
  );
}