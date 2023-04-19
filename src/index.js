import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

// 불러오기
import GlobalStyle from "./styles/GlobalStyle";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import Home from "./routes/index/Home";
import About from "./routes/about/About";
import Projects from "./routes/projects/Projects";
import Detail from "./routes/projects/Detail";
import Mail from "./routes/mail/Mail";

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
      {
        path: "/projects",
        element: <Projects />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/projects/:name",
        element: <Detail />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/mail",
        element: <Mail />,
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
