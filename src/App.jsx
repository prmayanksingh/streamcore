import "./style/font.css";
import MainRoute from "./routes/MainRoute";
import ReactLenis from "lenis/react";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-[#161616] text-white font-[funnel]">
      <ReactLenis
        root
        options={{
          lerp: 0.1, // smoothness (0–1)
          smoothWheel: true,
        }}
      >
        <ScrollToTop />
        <MainRoute />
      </ReactLenis>
    </div>
  );
};

export default App;
