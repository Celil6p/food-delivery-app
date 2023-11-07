import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import InputComponent from "@/components/Input";
import CheckboxComponent from "@/components/Checkbox";

const Account = () => {
    return (
        <form>
            <h3 className="text-xl font-semibold p-2 mx-3 ">Account</h3>

            <div className="h-full w-full flex flex-col overflow-hidden rounded-3xl border-2 my-5 border-light-gray">
                <div className="flex flex-col mx-5">
                    <h3 className="text-lg font-extrabold my-5">
                        Personal information
                    </h3>
                    <p className="font-thin text-sm text-primary-gray pb-1">
                        Avatar
                    </p>
                    <div className="flex flex-row items-center  space-x-6">
                        <div className="flex justify-center overflow-hidden min-h-[88px] min-w-[88px] h-[88px] w-[88px] rounded-xl ">
                            <Image
                                src={"/user.png"}
                                alt={"User"}
                                width={100}
                                height={200}
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <Button
                            label="Change"
                            variant="secondary"
                            className="h-auto sm:w-auto"
                        />
                        <Button
                            label="Remove"
                            variant="default"
                            className="h-auto sm:w-auto"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 mb-16">
                        <div>
                            <p className="font-thin text-sm text-primary-gray pt-2">
                                First Name
                            </p>
                            <InputComponent
                                type={"text"}
                                placeholder={"Jane"}
                            />
                        </div>
                        <div>
                            <p className="font-thin text-sm text-primary-gray pt-2">
                                Last Name
                            </p>
                            <InputComponent
                                type={"text"}
                                placeholder={"Robertson"}
                            />
                        </div>
                        <div>
                            <p className="font-thin text-sm text-primary-gray pt-2">
                                Email
                            </p>
                            <InputComponent
                                type={"email"}
                                placeholder={"jane.robertson@example.com"}
                            />
                        </div>
                        <div>
                            <p className="font-thin text-sm text-primary-gray pt-2">
                                Phone Number
                            </p>
                            <InputComponent
                                type={"tel"}
                                placeholder={"(217) 555-0113"}
                            />
                        </div>
                    </div>
                    <h3 className="text-lg font-extrabold">
                        Email Notification
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6 font-thin text-sm text-primary-gray pt-2 mb-6">
                        <CheckboxComponent
                            id={"new-deals"}
                            label={"New deals"}
                        />
                        <CheckboxComponent
                            id={"password-changes"}
                            label={"Password Changes"}
                        />
                        <CheckboxComponent
                            id={"new-rastaurants"}
                            label={"New restaurants"}
                        />
                        <CheckboxComponent
                            id={"special-offers"}
                            label={"Special offers"}
                        />
                        <CheckboxComponent
                            id={"order-statuses"}
                            label={"Order statuses"}
                        />
                        <CheckboxComponent
                            id={"newsletter"}
                            label={"Newsletter"}
                        />
                    </div>
                    <div className="py-5 block md:hidden">
                            <Button
                                label="Log out"
                                variant="danger"
                                className="h-12 w-full"
                            />
                        </div>
                </div>
                <div className="border flex justify-between gap-4 p-5">
                    <div className="hidden md:block min-w-24">
                        <Button
                            label="Log out"
                            variant="danger"
                            className="h-auto w-24"
                        />
                    </div>
                    <div className="flex justify-end w-full gap-4">
                        <Button
                            label="Discard changes"
                            variant="default"
                            className="h-auto w-full md:w-auto border"
                        />
                        <Button
                            label="Save changes"
                            variant="primary"
                            className="h-auto w-full md:w-auto "
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Account;
