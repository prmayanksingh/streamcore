import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Work from "../pages/Work";
import AboutUs from "../pages/AboutUs";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
  );
};

export default MainRoute;
