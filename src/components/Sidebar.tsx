import React from 'react'
import { X } from 'lucide-react';

type SidebarProps = {
  isMobileMenuOpen: boolean;
  isSidebarTheme: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen, isSidebarTheme }: SidebarProps) => {
  return (
    <>
      {isSidebarTheme && (
        <aside
          className={`text-white py-16 px-6 
            ${isMobileMenuOpen ? 'fixed top-0 left-0 w-4/5 h-full z-40 bg-gray-800' : 'hidden'} 
            md:static md:block md:w-64 md:min-h-screen md:bg-gray-800`}
        >
          <button
            className="absolute top-4 right-4 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <nav>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Wishlist</a></li>
              <li><a href="/about" className="hover:underline">Manage Account</a></li>
              <li><a href="/contact" className="hover:underline">Settings</a></li>
              <li><a href="/contact" className="hover:underline">FAQs</a></li>
              <li><a href="/contact" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  )
}

export default Sidebar