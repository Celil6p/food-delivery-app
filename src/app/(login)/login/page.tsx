import React from "react";

import LoginHero from "./LoginHero/LoginHero";
import LoginForm from "./LoginForm/LoginForm";

const LoginPage = () => {
    return (
        <div className="flex">
                <LoginForm />
            <div className="w-7/12 bg-primary-indigo-hover hidden lg:block">
                <LoginHero />
            </div>
        </div>
    );
};

export default LoginPage;
