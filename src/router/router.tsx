import { createBrowserRouter } from "react-router-dom";
import Events from "../view/events/events";
import Albums from "../view/albums/albums";
import Login from "../view/login/login";
import Register from "../view/register/register";
import Terms from "../view/terms/terms";
import Car from "../view/car/cat";
import Contact from "../view/contact/contact";
import Privacy from "../view/privacy/privacy";
import Faq from "../view/faq/faq";
import Count from "../view/count/count";
import Shopping from "../view/shopping/shopping";
import Home from "../view/home/home";
import Verification from "../view/verification/verification";
import AuthGuard from "../guards/guards";
import NotFound from "../components/notFound";
import Email from "../view/email/email";
import Password from "../view/password/password";

const router = createBrowserRouter(
  [
    { path: "/", element: <Home /> },
    { path: "/albums", element: <Albums /> },
    { path: "/events", element: <Events /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/email", element: <Email /> },
    {path: "/password", element: <Password/>},
    { path: "/terms", element: <Terms /> },
    { path: "/car", element: <Car /> },
    { path: "/contact", element: <Contact /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/faq", element: <Faq /> },
    { path: "/count", element: <Count /> },
    { path: "/shopping", element: <Shopping /> },
    { path: "verification", element: <Verification /> },

    { path: "/authguard", element: <AuthGuard /> },
  { path: "*", element: <NotFound /> }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplat: true,
    },
  }
);

export default router;
