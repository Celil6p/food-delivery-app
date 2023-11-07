interface FormButtonProps {
    type: "button" | "submit" | "reset";
    text: string;
    className?: string;
}

const FormButton: React.FC<FormButtonProps> = ({
    type,
    text,
    className = "",
}) => {
    return (
        <button
            type={type}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-indigo hover:bg-primary-indigo-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
        >
            {text}
        </button>
    );
};

export default FormButton;
