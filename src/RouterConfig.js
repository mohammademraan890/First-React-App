import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./Components/Pages/NotFound/NotFound";

// Lazy loading components
const Layout = lazy(() => import("./Components/Layout"));
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const ServicesPage = lazy(() =>
  import("./Components/Pages/ServicesPage/ServicesPage")
);
const Contact = lazy(() =>
  import("./Components/Pages/ContactPage/ContactPage")
);
const About = lazy(() => import("./Components/Pages/AboutPage/About"));

const routerFiles = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Layout...</div>}>
        <Layout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/services",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routerFiles;
