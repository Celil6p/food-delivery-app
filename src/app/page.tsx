import React from "react";
import InputComponent from "@/components/InputComponent";
import CheckboxComponent from "@/components/CheckboxComponent";
import ButtonComponent from "@/components/ButtonComponent";
import LoginHero from "@/components/LoginHero";

const LoginPage: React.FC = () => {
    return (
        <main className="flex">
            <div className="w-screen min-w-[308px] flex-1 min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-[350px] w-full space-y-8">
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="absolute top-2"
                    />
                    <div className="text-left flex flex-col items-start">
                        <h1 className="font-nunito text-60 text-neutral-black leading-tighter tracking-tighter font-extrabold mb-4">
                            Login
                        </h1>
                        <p className="mt-2 text-sm text-neutral-black">
                            Sign in with your data that you entered during your
                            registration.
                        </p>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div>
                            <p className="text-xs text-neutral-black">E-mail</p>
                            <InputComponent
                                type="email"
                                placeholder="name@example.com"
                                autoComplete="email"
                                required
                                className="max-w-[350px]"
                            />
                        </div>
                        <div>
                            <p className="text-xs text-neutral-black">
                                Password
                            </p>
                            <InputComponent
                                type="password"
                                placeholder="min. 8 characters"
                                required
                                className="max-w-[350px]"
                            />
                        </div>
                        <CheckboxComponent
                            id="remember-me"
                            label="Keep me logged in"
                            className="mt-4"
                        />
                        <div className="flex items-center justify-between">
                            <ButtonComponent
                                type="submit"
                                text="Login"
                                className="w-full mt-4"
                            />
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <a
                            href="#"
                            className=" font-extrabold text-primal-purple hover:text-indigo-500 font-nunito"
                        >
                            Forgot password
                        </a>
                    </div>
                    <div className="absolute translate-x-12 text-center bottom-5">
                        Don’t have an account?{" "}
                        <a
                            href="#"
                            className="text-primal-purple font-semibold hover:text-indigo-500"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-7/12 bg-primal-purple hidden sm:block">
                <LoginHero />
            </div>
        </main>
    );
};

export default LoginPage;
