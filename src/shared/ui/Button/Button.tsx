import type { IButtonProps } from "./types";

const Button = (props: IButtonProps) => {
    const { children, onClick = () => null, type = "default", disabled = false, className } = props;

    const baseStyles = "cursor-pointer transition-colors duration-200";

    const typeStyles = {
        default: "bg-gradient-to-r from-[#FD267A] to-[#FF6036] text-white rounded-[22px]",
        white: "bg-white text-[19px] text-[#21262E] leading-[26px] px-[16px] pt-[4px] pb-[6px] font-bold rounded-[18px]",
    };

    const combinedClassName = `
        ${baseStyles}
        ${typeStyles[type]}
        ${className}
    `
        .trim()
        .replace(/\s+/g, " ");

    return (
        <button className={combinedClassName} onClick={onClick} disabled={disabled} type="button">
            {children}
        </button>
    );
};
export default Button;
