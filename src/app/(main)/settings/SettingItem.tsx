import NavCard from "@/components/NavCard";
import React from "react";
import { IconType } from "react-icons";
import Link from "next/link";

type SettingItemProps = {
    icon: IconType;
    title: string;
    description: string;
    url: string;
    isActive?: boolean;
};

const SettingItem: React.FC<SettingItemProps> = ({
    icon: Icon,
    title,
    description,
    url,
    isActive,
}) => {
    return (
        <Link href={url} passHref>
            <div
                className={`flex items-center p-4 rounded-2xl min-w-[160px] border border-light-gray ring-primary-indigo hover:bg-light-indigo hover:ring-1 ${
                    isActive
                        ? "bg-light-indigo border-2 border-primary-indigo-hover ring-1"
                        : "bg-white"
                } shadow-sm`}
            >
                <NavCard
                    className={`text-lg border border-light-gray ${
                        isActive
                            ? "text-white bg-primary-indigo"
                            : "text-primary-gray bg-white"
                    }`}
                >
                    <Icon className="text-xl"/>
                </NavCard>

                <div className="ml-4">
                    <p className={`text-md font-semibold`}>{title}</p>
                    <p className="text-sm text-primary-gray">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default SettingItem;
