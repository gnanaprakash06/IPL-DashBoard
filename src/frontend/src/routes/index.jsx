import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { TeamPage } from "../pages/TeamPage";
import MatchPage from "../pages/MatchPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/teams/:teamName",
                element: <TeamPage />,
            },
            {
                path: "/teams/:teamName/matches/:year",
                element: <MatchPage />,
            },
        ],
    },
]);

export default router;
