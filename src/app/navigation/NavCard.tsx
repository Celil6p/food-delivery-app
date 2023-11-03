import React from 'react';

interface NavCardProps {
    className?: string;
    children?: React.ReactNode;
}

const NavCard: React.FC<NavCardProps> = ({ className = '', children }) => {
    return (
        <div className={`w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center  hover:ring-2 ring-primal-purple ${className}`}>
            {children}
        </div>
    );
}

export default NavCard;
