import { BottomNav, type NavLinkItem } from "../BottomNav";
import Profile from "../../../../shared/assets/icons/profile.svg";
import Messages from "../../../../shared/assets/icons/messages.svg";
import Matches from "../../../../shared/assets/icons/matches.svg";
import Search from "../../../../shared/assets/icons/search.svg";
import Fire from "../../../../shared/assets/icons/fire.svg";
import { Outlet } from "react-router";

export function Layout() {
    const links: NavLinkItem[] = [
        {
            to: "/swipes",
            icon: <Fire />,
            label: "Swipes",
        },
        {
            to: "/explore",
            icon: <Search />,
            label: "Explore",
        },
        {
            to: "/matches",
            icon: <Matches />,
            label: "Matches",
            notification: {
                type: "count",
                value: 999,
            },
        },
        {
            to: "/messages",
            icon: <Messages />,
            label: "Messages",
            notification: {
                type: "dot",
            },
        },
        {
            to: "/profile",
            icon: <Profile />,
            label: "Profile",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#111418] text-white">
            <main className="flex-1 pb-12">
                <Outlet />
            </main>
            <BottomNav links={links} />
        </div>
    );
}
