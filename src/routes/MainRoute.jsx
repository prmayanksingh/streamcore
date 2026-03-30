import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import AiReplacingCoding from "../pages/blog/aiReplacingCoding";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/ai-replacing-coding" element={<AiReplacingCoding />} />
    </Routes>
  );
};

export default MainRoute;
