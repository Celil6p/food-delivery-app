interface CheckboxProps {
    id: string;
    label: string;
    className?: string;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ id, label, className = '' }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <input
                id={id}
                type="checkbox"
                className="h-5 w-5 focus:ring-primary-indigo-hover border-gray-300 accent-primary-indigo"
            />
            <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
}

export default CheckboxComponent;
