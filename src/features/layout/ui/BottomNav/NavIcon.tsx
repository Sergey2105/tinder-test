import styles from "./NavIcon.module.scss";
import type { NavIconProps } from "./types";
export function NavIcon({ icon, notification, isActive }: NavIconProps) {
    return (
        <div className={`relative ${isActive ? styles["nav-icon-active"] : styles["nav-icon-inactive"]}`}>
            {icon}
            {!!notification && (
                <div
                    className={`absolute rounded-full
              flex items-center justify-center
            ${
                notification.type === "count"
                    ? "-top-1 -right-3 bg-linear-to-tr from-[#FD267A] to-[#FF6036]"
                    : `top-0 right-0 w-2.5 h-2.5 bg-[#FF4458]  ${isActive ? "border-2 border-[#111418]" : "border-2 border-white"}`
            }
          `}
                >
                    {notification.type === "count" && (
                        <span className="text-white text-[9px] pl-[3px] pr-1 pb-0.5 leading-[13px] font-bold">
                            {notification.value && notification.value > 99 ? "99+" : notification.value}
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
