'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  Menu,
  Github,
  MessageSquare,
  HelpCircle,
  Wallet,
  Moon,
  Sun,
} from 'lucide-react';
import ConnetButton from './ConnetButton';
import { SearchBarDialog } from './SearchBarDialog';
import Image from 'next/image';
import { useWallet } from '@solana/wallet-adapter-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { publicKey } = useWallet();

  // Theme handling with next-themes
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="border-b border-gray-800 bg-white dark:bg-black/90 backdrop-blur sticky top-0 z-50">
      <div className="flex h-16 items-center px-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/UniteLogoMain.png"
              alt="Logo"
              width={30}
              height={30}
            />
            <span className="text-lg font-semibold text-black dark:text-white">
              Unite
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4 ml-auto">
          <SearchBarDialog />

          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
              GitHub
            </a>
          </div>

          {mounted && (
            <div
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              className="flex items-center justify-between px-2 py-[6px] bg-[#111] border border-gray-500 rounded-full cursor-pointer"
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-blue-400 hover:text-white" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400 hover:text-white" />
              )}
            </div>
          )}

          <ConnetButton />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-white dark:bg-black">
          <div className="px-4 py-4 space-y-2">
            <div className="pt-4 border-t border-gray-800 mt-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Blog
                </a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-black dark:hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
