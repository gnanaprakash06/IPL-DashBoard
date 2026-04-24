import { createHashRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import HomePage from "../pages/HomePage";
import MatchPage from "../pages/MatchPage";
import { TeamPage } from "../pages/TeamPage";

const router = createHashRouter([
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
