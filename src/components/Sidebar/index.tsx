import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-14 left-0 h-full bg-gray-600 text-white transition-transform transform p-5 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-80 z-50`}
    >
      <ul className='space-y-3'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/actions">Actions</Link>
        </li>
      </ul>
    </div>
  );
};
