import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Header Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import Properties from "./pages/Properties";

// Footer Pages
import Faq from "./components/Faq";

// Authentication Pages 
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/Signup";

function AppWrapper() {
  return (
    <Routes>
      {/* Universal Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/properties" element={<Properties />} />

      {/* Authentication Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Footer Pages */}
      <Route path="/faq" element={<Faq />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppWrapper />
      </AuthProvider>
    </Router>
  );
}

export default App;