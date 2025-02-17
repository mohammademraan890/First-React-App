import "./App.css";
import { RouterProvider } from "react-router-dom";

import routerFiles from "./RouterConfig";
import "./Responsiveness.css";




function App() {
  return (
   <RouterProvider router={routerFiles} />

  );
}

export default App;
