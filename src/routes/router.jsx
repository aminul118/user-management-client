import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>
  },
]);

export default router;
