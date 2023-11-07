import React from 'react';

interface NavCardProps {
    className?: string;
    children?: React.ReactNode;
}

const NavCard: React.FC<NavCardProps> = ({ className = '', children }) => {
    return (
        <div className={`w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center ring-offset-2 ${className}`}>
            {children}
        </div>
    );
}

export default NavCard;
