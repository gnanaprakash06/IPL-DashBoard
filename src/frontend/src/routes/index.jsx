import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import { TeamPage } from "../pages/TeamPage";
import MatchPage from "../pages/MatchPage";

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <h1>Home Page</h1>,
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
