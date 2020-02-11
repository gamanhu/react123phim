import Home from "./pages/home/home";
import Booking from "./pages/user/booking";
// import LoginAdmin from "./pages/admin/login-admin";
import Dashboard from "./pages/admin/dashboard";
import Dashboard3 from "./components/dashboard/Dashboard";
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
    },
    {
        path:"/dashboard3",
        exact:false,
        component:Dashboard3
    }
]

export {routesHome,routesUser,routesAdmin};