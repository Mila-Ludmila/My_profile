import { createRoot } from "react-dom/client";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./share/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/",
    element: <Home />,
  },
  
]);

root.render(
  <Provider store={store}>
    <RouterProvider router ={router} />
  </Provider> 
);


