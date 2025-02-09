import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import About from "./Pages/AboutPage/About";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import "./Responsiveness.css";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      

  );
}

export default App;
