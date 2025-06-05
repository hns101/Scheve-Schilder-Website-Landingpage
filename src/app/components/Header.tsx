"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const navLinks = [
    { href: "/", text: "Schilderschool" }, // Homepage
    { href: "/inschrijven", text: "Inschrijven" },
    { href: "/lesprogramma", text: "Lesprogramma" },
];

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname(); // Haal het huidige pad op

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    // Define base classes for the logo that always apply
    const logoBaseClasses = "-rotate-2";
    // Conditionally define size and padding classes for the logo
    const logoDynamicClasses = isMobileMenuOpen
        ? "h-20 pt-4"  // Smaller height and padding when menu is open
        : "h-32 pt-7"; // Original height and padding when menu is closed

    return (
        <header className="sticky top-0 z-50 ">

            <div className="relative z-10 bg-[var(--color-bg-header)] bg-opacity-80 backdrop-blur-sm">
                <div className="container mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <div className="flex-shrink-0 relative z-20">
                        <img
                            className={`transition-all duration-300 ${logoBaseClasses} ${logoDynamicClasses}`} // Combined classes
                            src="/Schilderschoolwit.png"
                            alt="Schilderschool De Scheve Schilder Logo"
                        />
                    </div>

                    <div className="flex items-center">
                        <nav className="hidden md:flex space-x-4 ">
                            {navLinks.map(link => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative text-[var(--color-text-default)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-[2px] after:bg-[var(--color-text-highlight)] after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100 after:origin-left font-semibold' : 'hover:text-[var(--color-text-default)] after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left'}`}
                                    >
                                        {link.text}
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-[var(--color-text-default)] hover:text-[var(--color-text-highlight)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-focus-ring)] p-2 rounded-md"
                                aria-expanded={isMobileMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <span className="sr-only">Open hoofdmenu</span>
                                <MenuIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="relative z-40 md:hidden bg-[var(--color-bg-header)] bg-opacity-95"> {/* NOTE: This div might still need margin-top to avoid overlapping the (now potentially smaller) logo */}
                    <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3"> {/* The pt-8 here positions links within this menu's background */}
                        {navLinks.map(link => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={closeMobileMenu}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive ? 'bg-[var(--color-text-highlight)] text-[var(--color-bg-header)]' : 'text-[var(--color-text-default)] hover:bg-[var(--color-bg-hover-light)] hover:text-[var(--color-text-highlight)]'}`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
            <div id="tilt-box" className="relative z-0 mb-2"></div>
        </header>
    );
};

export default Header;