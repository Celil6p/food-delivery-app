import Image from "next/image";

type PromotionCardProps = {
    title: string;
    description: string;
    discount: string;
    discountClassName: string;
    className: string;
    imgUrl: string;
    imgAlt: string;
};

const PromotionCard: React.FC<PromotionCardProps> = ({
    title,
    description,
    discount,
    className = "",
    imgUrl = "",
    imgAlt = "",
    discountClassName = ""
}) => {
    return (
        <div
            className={`relative flex rounded-xl font-nunito h-44 w-full ${className}`}
        >
            <div className="overflow-hidden w-1/2 bottom-0">
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={200}
                    height={200}
                    className={`absolute bottom-0`}
                    style={{objectFit: "contain", height: "auto", width: "auto"}}
                />
            </div>
            <div className="px-4">
                <h2 className="text-lg font-bold pt-4 pb-2">{title}</h2>
                <span className={`font-extrabold font-nunito text-4xl ${discountClassName}`}>{discount}</span>
                <p className="absolute text-sm text-primary-gray font-extralight my-2 bottom-0">{description}</p>
            </div>
        </div>
    );
};

export default PromotionCard;
