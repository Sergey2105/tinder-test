export interface NavLinkItem {
    to: string;
    icon: React.ReactElement;
    label: string;
    notification?: {
        type: "count" | "dot";
        value?: number;
    };
}

export interface BottomNavProps {
    links: NavLinkItem[];
}

export interface NavIconProps extends Omit<NavLinkItem, "to" | "label"> {
    isActive: boolean;
}
