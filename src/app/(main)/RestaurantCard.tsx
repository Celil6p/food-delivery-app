import React from "react";
import Image from "next/image";

type RestaurantCardProps = {
    name: string;
    imageSrc: string;
    time: string;
    minPrice: string;
    tags: string[];
    cartSize?: number;
    key: number;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({
    name,
    imageSrc,
    time,
    minPrice,
    tags,
    cartSize,
    key,
}) => {
    return (
        <div key={key} className="bg-white hover:bg-light-gray rounded-lg shadow-md overflow-hidden w-full font-nunito">
            <div className="flex justify-center relative h-40 overflow-hidden">
                {/* Image */}
                <Image
                    src={imageSrc}
                    alt={name}
                    style={{objectFit: "cover"}}
                    fill={true}
                />
            </div>

            {/* Content */}
            <div className="p-4 h-28 flex flex-col">
                {/* Name */}
                <div className="relative flex flex-row">
                    <h3 className="mx-2 text-lg font-semibold text-neutral-black mb-1">
                        {name}
                    </h3>
                    {/*Restaurant CartIcon*/}
                    <div className="absolute right-1 top-1">
                    <div className="relative">
                        <Image
                            src={`${cartSize ? "/cart.svg" : "/emptyCart.svg"}`}
                            alt="Cart"
                            width={20}
                            height={20}
                        />
                        
                            {cartSize? <div className="absolute rounded-md top-[-6px] right-[-6px] bg-primary-indigo text-white h-4 w-4 flex items-center justify-center text-xs">
                              {cartSize}
                            </div>: ""}
                        </div>
                    </div>
                </div>

                {/* Time and Price */}

                <div className="flex items-start text-sm text-primary-gray mb-2">
                    <Image
                        src={"/clock.svg"}
                        alt={"clock"}
                        width={12}
                        height={12}
                        className="m-1 mx-2"
                    />
                    <p>{`${time}`}</p>
                    <div className="rounded-full m-2 h-1 w-1 bg-primary-indigo"></div>
                    <p>{`$${minPrice} min sum`}</p>
                </div>

                {/* Tags */}
                <div className="flex items-center">
                    {tags.map((tag, index) => (
                        <div key={key} className="bg-light-gray rounded-full py-1 px-2 mx-1">
                            <span
                                key={index}
                                className="flex items-center mr-2 text-xs text-neutral-black"
                            >
                                <Image
                                    src={`/category/${tag}.png`}
                                    alt={tag}
                                    height={16}
                                    width={16}
                                    className="h-4 w-4 mr-1"
                                />
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;
