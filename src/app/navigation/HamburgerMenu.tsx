"use client";
import NavCard from "@/app/navigation/NavCard";
import InputComponent from "@/components/Input";
import Link from "next/link";
import React, { useState } from "react";

const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu}>
                <NavCard className="bg-gray-300">
                    <img src="menu.svg" alt="Menu" className="w-6 h-6" />
                </NavCard>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute transform -translate-x-full mt-4 min-w-[200px] left-8 w-auto  py-2 bg-white border rounded-md shadow-lg z-10">
                    <Link href="#" className="block w-full text-center font-nunito px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                        Restaurants
                    </Link>
                    <Link href="#" className="block w-full text-center font-nunito px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                        Deals
                    </Link>
                    <Link href="#" className="block w-full text-center font-nunito px-4 py-2 text-gray-600 hover:bg-blue-500 hover:text-white">
                        My Orders
                    </Link>
                    <div className="block w-full text-center font-nunito px-4 py-2">
                    <InputComponent type={"search"} placeholder={"Search"}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
