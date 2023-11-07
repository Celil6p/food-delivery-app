import React from "react";
import PromotionCard from "./PromotionCard";
import CategoryButton from "./CategoryButton";
import RestaurantCard from "./RestaurantCard";

const categories = [
    { label: "Pizza", src: "/category/Pizza.png" },
    { label: "Burger", src: "/category/Burger.png" },
    { label: "BBQ", src: "/category/BBQ.png" },
    { label: "Sushi", src: "/category/Sushi.png" },
    { label: "Vegan", src: "/category/Vegan.png" },
    { label: "Deserts", src: "/category/Desert.png" },
];

const dummyRestaurants = [
    {
        name: "The Burger Joint",
        imageSrc: "/restaurants/hamburger.png",
        time: "30-40 min",
        minPrice: "15",
        tags: ["Burger", "Pizza"],
        cartSize: 0
    },
    {
        name: "Ninja Sushi 1",
        imageSrc: "/restaurants/sushi1.png",
        time: "20-30 min",
        minPrice: "22",
        tags: ["Sushi"],
        cartSize: 2
    },
    {
        name: "Ninja Sushi 2",
        imageSrc: "/restaurants/sushi2.png",
        time: "20-30 min",
        minPrice: "25",
        tags: ["Sushi"],
        cartSize: 0
    },
    {
        name: "Ninja Sushi 3",
        imageSrc: "/restaurants/sushi3.png",
        time: "20-30 min",
        minPrice: "18",
        tags: ["Sushi"],
        cartSize: 1
    },
    {
        name: "Ninja Sushi 4",
        imageSrc: "/restaurants/sushi4.png",
        time: "15-25 min",
        minPrice: "20",
        tags: ["Sushi"],
        cartSize: 0
    },
    {
        name: "Ninja Sushi 5",
        imageSrc: "/restaurants/sushi5.png",
        time: "25-35 min",
        minPrice: "30",
        tags: ["Sushi"],
        cartSize: 1
    },
];

const Home = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-8">
                <PromotionCard
                    imgUrl="/cupcake.png"
                    imgAlt="cupcake"
                    title="All deserts"
                    description="Deserty"
                    discount="20% OFF"
                    discountClassName="text-primary-indigo"
                    className="bg-light-indigo"
                    key={1}
                />
                <PromotionCard
                    imgUrl="/hamburger.png"
                    imgAlt="hamnurger"
                    title="Big Burgers"
                    description="Fooddies"
                    discount="50% OFF"
                    discountClassName="text-secondary-default"
                    className="bg-secondary-light"
                    key={2}
                />
            </div>
            {/*Categories*/}
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 items-center justify-center gap-8 my-8">
                {categories.map((category, index) => (
                    <CategoryButton
                        key={index}
                        label={category.label}
                        iconSrc={category.src}
                    />
                ))}
            </div>

            <div className="font-nunito font-extrabold text-xl text-neutral-black mt-8 mb-2">
                <p>Nearby Restaurants</p>
            </div>
            {/*Restaurants*/}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 items-center justify-center gap-8 my-8">
                {dummyRestaurants.map((restaurant, index) => (
                    <RestaurantCard
                        key={index}
                        name={restaurant.name}
                        imageSrc={restaurant.imageSrc}
                        time={restaurant.time}
                        minPrice={restaurant.minPrice}
                        tags={restaurant.tags}
                        cartSize={restaurant.cartSize}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
