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
            className={`relative w-full px-3 py-2 border border-primary-gray placeholder-primary-gray text-neutral-black rounded-lg focus:outline-none focus:ring-primary-indigo focus:border-primary-indigo focus:z-10 sm:text-sm ${className}`}
            placeholder={placeholder}
        />
    );
}

export default InputComponent;
