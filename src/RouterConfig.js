import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from "./Components/Pages/HomePage/HomePage";
import About from "./Components/Pages/AboutPage/About";
import ServicesPage from "./Components/Pages/ServicesPage/ServicesPage";
import ContactPage from "./Components/Pages/ContactPage/ContactPage";
import NotFound from "./Components/Pages/NotFound/NotFound";

const routerFiles = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routerFiles;
