import React from "react";
import Image from "next/image";

type CategoryButtonProps = {
    label: string;
    iconSrc: string; // Source path for the icon
    className?: string;
    onClick: () => void;
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
    label,
    iconSrc,
    className,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col gap-3 items-center justify-center border border-transparent text-sm font-medium rounded-lg text-black shadow-md overflow-hidden focus:outline-none ring-indigo-500 hover:bg-light-indigo hover:ring-1 h-20 w-full ${className}`}
        >
            <div className="w-4 h-4 relative">
                <Image
                    src={iconSrc}
                    alt={label}
                    width={20}
                    height={20}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div>{label}</div>
        </button>
    );
};

export default CategoryButton;
