import { createBrowserRouter } from "react-router";
import { Layout } from "../features/layout/ui/Layout";
import { ExplorePage } from "../pages/ExplorePage";
import { MatchesPage } from "../pages/MatchesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SwipesPage } from "../pages/SwipesPage";
import { MessagesPage } from "../pages/MessagesPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { index: true, element: <SwipesPage /> },
            { path: "swipes", element: <SwipesPage /> },
            { path: "explore", element: <ExplorePage /> },
            { path: "matches", element: <MatchesPage /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "messages", element: <MessagesPage /> },
        ],
    },
]);
