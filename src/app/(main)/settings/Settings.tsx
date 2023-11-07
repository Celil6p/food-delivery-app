'use client'
import { usePathname } from 'next/navigation';
import React from 'react';
import { FiUser, FiMapPin, FiCreditCard, FiShield } from 'react-icons/fi';
import SettingItem from './SettingItem';

interface SettingsProps {
  children?: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
  // Use usePathname to get the current pathname
  const pathname = usePathname();

  // Define the base path for settings pages
  const basePath = '/settings';

  // A list of all settings with their path, title, and description
  const settingsOptions = [
    { icon: FiUser, title: 'Account', description: 'Personal information', path: `${basePath}/account` },
    { icon: FiMapPin, title: 'Address', description: 'Shipping addresses', path: `${basePath}/address` },
    { icon: FiCreditCard, title: 'Payment method', description: 'Connected credit cards', path: `${basePath}/payment` },
    { icon: FiShield, title: 'Security', description: 'Password, 2FA', path: `${basePath}/security` },
  ];

  const isSettingActive = (path: string) => pathname === path;

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3">
        <h3 className="text-xl font-semibold px-2 py-2 mx-3">Settings</h3>
        <div className="flex flex-col gap-5 p-5">
          {settingsOptions.map((setting, index) => (
            <SettingItem
              key={index}
              icon={setting.icon}
              title={setting.title}
              description={setting.description}
              url={setting.path}
              isActive={isSettingActive(setting.path)}
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        {children}
      </div>
    </div>
  );
};

export default Settings;
