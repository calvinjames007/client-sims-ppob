import {createBrowserRouter, RouterProvider, Route, Link,} from "react-router-dom";
import RegisterPage from "../views/registerPage.jsx";
import LoginPage from "../views/loginPage.jsx"
import LandingPage from "../views/landingPage.jsx"
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "register",
        element: <RegisterPage />,
    },
    {
        path: "login",
        element: <LoginPage />
    }
]);

export default router