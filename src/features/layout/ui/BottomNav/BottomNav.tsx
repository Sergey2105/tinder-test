import { NavLink } from "react-router";
import type { BottomNavProps } from "./types";
import { NavIcon } from "./NavIcon";

export function BottomNav(props: BottomNavProps) {
    const { links } = props;

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#111418] flex justify-around items-center h-12">
            {links.map(({ to, icon, notification }) => (
                <NavLink key={to} to={to} className={({ isActive }) => `flex flex-col items-center justify-center gap-1 ${isActive ? "text-[#FF4458]" : "text-gray-500"}`}>
                    {({ isActive }) => <NavIcon icon={icon} notification={notification} isActive={isActive} />}
                </NavLink>
            ))}
        </nav>
    );
}
