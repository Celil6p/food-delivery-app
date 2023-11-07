"use client";
import NavCard from "@/components/NavCard";
import InputComponent from "@/components/Input";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";


const HamburgerMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Icon */}
            <button onClick={toggleMenu}>
                <NavCard className="bg-light-gray hover:ring-2 text-primary-gray hover:ring-primary-indigo-hover">
                    <FiMenu className="text-lg"/>
                </NavCard>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute transform -translate-x-full mt-4 min-w-[200px] left-8 w-auto  py-2 bg-white border rounded-md shadow-lg z-10">
                    <div className="block w-full text-center font-nunito px-4 py-2">
                        <div className="relative">
                    <InputComponent
                                type={"search"}
                                placeholder={"Search"}
                                className="bg-light-gray"
                            />
                            <div className="absolute top-[10px] right-2 text-gray-400">
                                <Image src={"/search.svg"} alt="SearchIcon" height={16} width={16} />
                            </div>
                            </div>
                    </div>
                    <Link
                        href="restaurants"
                        className="block w-full text-center text-lg font-bold font-nunito px-4 py-2 text-gray-600 hover:bg-primary-indigo-hover hover:text-white"
                    >
                        Restaurants
                    </Link>
                    <Link
                        href="deals"
                        className="block w-full text-center text-lg font-bold font-nunito px-4 py-2 text-gray-600 hover:bg-primary-indigo-hover hover:text-white"
                    >
                        Deals
                    </Link>
                    <Link
                        href="/orders"
                        className="block w-full text-center text-lg font-bold font-nunito px-4 py-2 text-gray-600 hover:bg-primary-indigo-hover hover:text-white"
                    >
                        My Orders
                    </Link>
                </ul>
            )}
        </div>
    );
};

export default HamburgerMenu;
