import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Main from "./Components/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Main /> },
      { path: "home", element: <Main /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  // {
  //   path: "home",
  //   element: <Layout />,
  //   children: [
  //     { path: "", element: <Main /> },
  //     { path: "portfolio", element: <Portfolio /> },
  //     { path: "about", element: <About /> },
  //     { path: "contact", element: <Contact /> },
  //     { path: "*", element: <NotFound /> },
  //   ],
  // },
  {
    path: "React-First-Project",
    element: <Layout />,
    children: [
      { path: "", element: <Main /> },
      { path: "home", element: <Main /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
