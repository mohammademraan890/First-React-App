import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import {NotFound} from "./imports";
import { HomePage } from "./imports";
import Loader from "./Components/loader/Loader";

// Lazy loading components
const Layout = lazy(() => import("./Components/Layout"));
const ServicesPage = lazy(() => import("./Components/Pages/ServicesPage/ServicesPage"));
const Contact = lazy(() => import("./Components/Pages/ContactPage/ContactPage"));
const About = lazy(() => import("./Components/Pages/AboutPage/About"));

const routerFiles = createBrowserRouter([

  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Layout />
      </Suspense>
    ),
    
    children: [
      { 
        path: "/", 
        element: (
          <Suspense fallback ={<Loader/>}>
            <HomePage />

          </Suspense>
        ),
      },
      { 
        path: "/about", 
        element: (
          <Suspense fallback={<Loader/>}>
            <About />
          </Suspense>
        ),
      },
      { 
        path: "/services", 
        element: (
          <Suspense fallback={<Loader/>}>
            <ServicesPage />
          </Suspense>
        ),
      },
      { 
        path: "/contact", 
        element: (
          <Suspense fallback={<Loader/>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routerFiles;
