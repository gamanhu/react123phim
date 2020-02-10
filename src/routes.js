import Home from "./pages/home/home";
import DetailMovie from "./components/detail-movie";

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
    }
]

export {routesHome};