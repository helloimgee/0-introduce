import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Main from "./Main";
import ErrorPage from "./ErrorPage";
import Home from "./routes/index/Home";
import GlobalStyle from "./styles/GlobalStyle";
import About from "./routes/about/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createHashRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
