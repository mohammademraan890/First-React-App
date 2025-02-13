import "./App.css";
import { RouterProvider } from "react-router-dom";
import "./Responsiveness.css";
import routerFiles from "./RouterConfig";

function App() {
  return (
   <RouterProvider router={routerFiles} />

  );
}

export default App;
