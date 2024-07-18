import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import BlogPage from "./pages/BlogPage";
import DigitalMarketing from "./pages/DigitalMarketing";
import Ecommer from "./pages/Ecommer";
import Sem from "./pages/Sem";
import Social from "./pages/Social";
import SocialMedai from "./pages/SocialMedai";
import WebsiteHosting from "./pages/WebsiteHosting";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutus",
    element: <AboutPage />,
  },
  {
    path: "/contactus",
    element: <ContactUsPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/service/digitalmarketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/service/ecommerce",
    element: <Ecommer />,
  },
  {
    path: "/service/SEM",
    element: <Sem />,
  },
  {
    path: "/service/social",
    element: <Social />,
  },
  {
    path: "/service/socialmedia",
    element: <SocialMedai />,
  },
  {
    path: "/service/webhosting",
    element: <WebsiteHosting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
