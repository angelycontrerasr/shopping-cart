import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Homepage from "./homepage/Homepage.jsx";
import Cards from "./shoppingCart/Cards.jsx";
// Import Link from react-router-dom
import { Link } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "shoppingCart",
        element: <Cards />,
    },
]);

// Move the GoShoppingButton component outside of the createRoot call

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);

// Export GoShoppingButton separately, if needed elsewhere
// export default GoShoppingButton;

// Or, if you intended to export the routing configuration or root component,
// that would typically be done differently.
// For now, the component is defined above.