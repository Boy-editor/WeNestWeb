import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

{/* Header Pages */}
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import Properties from "./pages/Properties";

{/* Footer Pages */}
import Faq from "./components/Faq";

function App() {
  return (
    <Router>
      <Routes>
        {/* Universal Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/properties" element={<Properties />} />

        {/* Footer Pages */}
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
