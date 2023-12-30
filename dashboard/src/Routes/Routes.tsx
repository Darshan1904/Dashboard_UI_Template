import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PricingPage from "../pages/PricingGrid";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../components/ChangePassword";
import ProfilePage from "../pages/Profile";
import PublishForm from "../pages/PublishForm";
import GraphPage from "../pages/GraphPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <ProfilePage />
            },
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
        path:"/graphs/:ind",
        element: <GraphPage />
    },
    {
        path:"write",
        element: <PublishForm />
    },
    {
        path:"/pricingPage",
        element:<PricingPage />
    }
])