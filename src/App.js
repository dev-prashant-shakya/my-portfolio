import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
/* -------- Pages -------- */
import AboutMe from "./pages/About";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";
import Resume from "./pages/Resume";
import Connect from "./pages/Connect";
import RootLayout from "./root/Root";
import TechNews from "./pages/TechNews";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path: '/', element: <AboutMe/>},
      {path: '/projects', element: <Projects/>},
      {path: '/technologies', element: <Technologies/>},
      {path: '/resume', element: <Resume/>},
      {path: '/news', element: <TechNews/>},
      {path: '/connect', element: <Connect/>},
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}
export default App;