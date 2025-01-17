"use client"
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { useState } from 'react';

export const Navigation = () => {
  'use client';
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} />
    </>
  );
};
