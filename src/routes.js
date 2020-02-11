import Home from "./pages/home/home";
import Booking from "./pages/user/booking";
// import LoginAdmin from "./pages/admin/login-admin";
import Dashboard from "./pages/admin/dashboard";
const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    }
];


const routesUser=[
    
    {
        path: "/booking/:id",
        exact: false,
        component: Booking
    }
];

const routesAdmin = [
    {
        path:"/dashboard",
        exact:false,
        component:Dashboard
    }
]

export {routesHome,routesUser,routesAdmin};