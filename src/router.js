import { createBrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/Skills",
        element: <Skills />,
    },
    {
        path: "/Contact",
        element: <Contact />,
    },
]);
export default router;
