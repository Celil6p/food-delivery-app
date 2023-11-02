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
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-xl"
            />
            <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
                {label}
            </label>
        </div>
    );
}

export default CheckboxComponent;
