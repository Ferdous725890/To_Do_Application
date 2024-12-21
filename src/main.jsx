import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Main_Route/Main.jsx";
import Authprovider from "./shared Component/Authprovider/Authprovider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
<Authprovider>

      <RouterProvider router={router} />
</Authprovider>


  </StrictMode>
);
