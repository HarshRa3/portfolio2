import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/page.jsx";
import About from "../pages/about/page.jsx";
import Project from "../pages/projects/page.jsx"
import ProjecMore from '../pages/[projectMore]/Page.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path:"project",
        element:<Project/>
      },
      {path:"project/:projectId",
        element:<ProjecMore/>
      }
    ],
  },
]);

export default router;
