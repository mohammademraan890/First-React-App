import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Components/Pages/HomePage/HomePage";
import About from "./Components/Pages/AboutPage/About";
import ServicesPage from "./Components/Pages/ServicesPage/ServicesPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import "./Responsiveness.css";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Layout from "./Components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
