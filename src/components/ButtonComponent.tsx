interface ButtonProps {
    type: "button" | "submit" | "reset";
    text: string;
    className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ type, text, className = '' }) => {
    return (
        <button
            type={type}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primal-purple hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}>
            {text}
        </button>
    );
}

export default ButtonComponent;
