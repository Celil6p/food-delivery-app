interface InputProps {
    type: string;
    placeholder: string;
    autoComplete?: string;
    className?: string;
    required?: boolean;
}

const InputComponent: React.FC<InputProps> = ({ type, placeholder, autoComplete, className = '', required }) => {
    return (
        <input
            type={type}
            autoComplete={autoComplete}
            required={required}
            className={`relative w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
            placeholder={placeholder}
        />
    );
}

export default InputComponent;
