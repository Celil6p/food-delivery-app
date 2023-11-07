import React from 'react'
interface MainLayoutProps {
    className?: string;
    children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ className = '', children }) =>  {
  return (
    <main className={`gap-8 px-4 lg:px-44 md:px-10 sm:px-8 my-8 font-nunito${className}`}>{children}</main>
  )
}

export default MainLayout