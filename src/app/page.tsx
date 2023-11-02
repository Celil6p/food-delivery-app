import React from "react";

import LoginHero from "@/app/LoginHero";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <main className="flex">
                <LoginForm />
            <div className="w-7/12 bg-primal-purple hidden sm:block">
                <LoginHero />
            </div>
        </main>
    );
};

export default LoginPage;
