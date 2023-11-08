import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../(navigation)/Navbar";
import MainLayout from "./MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Food Delivery App",
    description: "A beutiful food delivery app frontend design",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}
