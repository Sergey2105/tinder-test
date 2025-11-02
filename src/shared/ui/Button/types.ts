export interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "default" | "white";
    disabled?: boolean;
    className?: string;
}
