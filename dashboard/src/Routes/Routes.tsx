import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PricingPage from "../components/PricingGrid";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path:"pricingPage",
        element:<PricingPage />
    }
])