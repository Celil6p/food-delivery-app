import HamburgerMenu from "@/app/(navigation)/HamburgerMenu";
import Image from "next/image";
import React from "react";
import NavCard from "../../components/NavCard";
import InputComponent from "@/components/Input";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md p-4 px-4 lg:px-44 md:px-10 sm:px-8">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    {/* Left - Search Section */}
                    <div className="flex items-center gap-12">
                        {/* Logo/Title */}
                        <Link href="/">
                        <Image
                            src="logo.svg"
                            alt="logo"
                            width={73}
                            height={90}
                            style={{objectFit: "contain", height:"auto", width:"auto"}}
                        />
                        </Link>
                        {/* Search Bar */}
                        <div className="relative hidden lg:block">
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

                    {/* Right - Menu Links and Profile */}
                    <div className="flex items-center space-x-6">
                        {/* Menu Links */}
                        <Link
                            href="/restaurants"
                            className="text-gray-600 hover:text-primary-indigo-hover font-bold text-lg font-nunito hidden lg:block"
                        >
                            Restaurants
                        </Link>
                        <Link
                            href="/deals"
                            className="text-gray-600 hover:text-primary-indigo-hover font-bold text-lg font-nunito hidden lg:block"
                        >
                            Deals
                        </Link>
                        <div className="bg-light-gray w-[2px] h-10" />
                        <Link
                            href="/orders"
                            className="text-gray-600 hover:text-primary-indigo-hover font-bold text-lg font-nunito hidden lg:block"
                        >
                            My orders
                        </Link>

                        {/* Cart */}
                        <Link href="/cart">
                        <div className="relative">
                            <NavCard className="bg-light-indigo hover:ring-2 hover:ring-primary-indigo-hover ">
                                <FiShoppingBag className="text-xl text-primary-indigo"/>
                            </NavCard>
                            <div className="absolute rounded-lg top-[-6px] right-[-6px] bg-primary-indigo text-white h-5 w-5 flex items-center justify-center text-xs">
                                4
                            </div>
                        </div>
                        </Link>

                        {/* Profile Picture */}
                        <Link href="/settings/account">
                        <NavCard className="ring-2 ring-light-gray flex justify-center items-center ring-offset-2 overflow-hidden hover:ring-2 hover:ring-primary-indigo-hover">
                            <Image
                                src={"/user.png"}
                                alt={"Profile Picture"}
                                height={200}
                                width={200}
                                style={{objectFit: "cover"}}
                            />
                        </NavCard>
                        </Link>
                        <div className="block lg:hidden">
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
