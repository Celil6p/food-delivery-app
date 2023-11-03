import HamburgerMenu from "@/app/navigation/HamburgerMenu";
import Image from "next/image";
import React from "react";
import NavCard from "../NavCard";
import InputComponent from "@/components/Input";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="bg-white shadow-md p-4 sm:px-40">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Left - Search Section */}
                    <div className="flex items-center space-x-4 px-4 sm:px-6 lg:px-8">
                        {/* Logo/Title */}
                        <Image src="logo.svg" alt="logo" width={73} height={90}/>
                        {/* Search Bar */}
                        <div className="relative hidden sm:block">
                           <InputComponent type={"search"} placeholder={"Search"}  />
                            <div className="absolute top-2 left-2 text-gray-400">
                                {/* Replace with your search icon */} <div className="h-2 w-2 bg-violet-600"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Menu Links and Profile */}
                    <div className="flex items-center space-x-6">
                        {/* Menu Links */}
                        <Link href="#" className="text-gray-600 hover:text-black font-nunito hidden sm:block">
                            Restaurants
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-black font-nunito hidden sm:block">
                            Deals
                        </Link>
                        <br />
                        <Link href="#" className="text-gray-600 hover:text-black font-nunito hidden sm:block">
                            My orders
                        </Link>

                        {/* Notification Icon */}
                        <div className="relative">
                            {/* Replace with your notification icon */}
                            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                4
                            </div>
                        </div>

                        {/* Profile Picture */}
                        <div>
                            <img
                                src="menu.svg"
                                alt="Profile Picture"
                                className="h-10 w-10 rounded-full border-2 border-blue-500"
                            />
                        </div>
                        <div className="block sm:hidden">
                            <HamburgerMenu/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
