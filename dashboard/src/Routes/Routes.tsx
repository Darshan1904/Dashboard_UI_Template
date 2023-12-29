import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PricingPage from "../pages/PricingGrid";
import EditProfile from "../components/EditProfile";
import ChangePassword from "../components/ChangePassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "editProfile",
                element: <EditProfile />
            },
            {
                path: "changePassword",
                element: <ChangePassword />
            }
        ]
    },
    {
        path:"/pricingPage",
        element:<PricingPage />
    }
])