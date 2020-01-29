import Home from "./pages/home/home";
import Booking from "./pages/user/booking";

const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    }
]


const routesUser=[
    
    {
        path: "/booking/:id",
        exact: false,
        component: Booking
    }
]

export {routesHome,routesUser};