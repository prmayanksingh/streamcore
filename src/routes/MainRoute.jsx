import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import AiReplacingCoding from "../pages/blog/AiReplacingCoding";
import AiReplacingSDE from "../pages/blog/AiReplacingSDE";
import AiTransformingECommerce from "../pages/blog/AiTransformingECommerce";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/ai-replacing-coding" element={<AiReplacingCoding />} />
      <Route path="/blog/ai-replacing-SDE" element={<AiReplacingSDE />} />
      <Route path="/blog/ai-transforming-e-commerce" element={<AiTransformingECommerce />} />
    </Routes>
  );
};

export default MainRoute;
