'use client';
import React from 'react';
import SidebarItem from './SidebarItem';

type SidebarItemProps = {
  key: string;
  label: string;
  href: string;
  isActive: boolean;
};

type SidebarProps = {
  items: SidebarItemProps[];
};

const Sidebar = ({ items }: SidebarProps) => {
  return (
    <aside className="w-full sm:w-64 p-4 border-r border-gray-200">
      <ul className="space-y-2">
        {items.map((item) => (
          <SidebarItem
            key={item.key}
            label={item.label}
            href={item.href}
            isActive={item.isActive}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
