import React from 'react';

interface NavbarProps {
  toggleSidebar: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 text-white px-5 py-2.5 h-14">
      <button onClick={toggleSidebar} className="bg-transparent border-none text-white text-3xl cursor-pointer">
        ☰
      </button>
      <h1>Next.js App</h1>
    </nav>
  );
};
